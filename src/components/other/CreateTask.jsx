import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';



// we have to use two way binding in every input in the form
const CreateTask = () => {

    const [title, setTaskTitle] = useState('');
    const [description, setTaskDescription] = useState('');
    const [date, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    // task 
    const [task, setTask] = useState({})

    const[userData,setUserData]= useContext(AuthContext);

    const sumbitHandler = (e) => {
        e.preventDefault();
        setTask({ title, description, date, category, active: false, newTask: true, failed: false, completed: false })
        const data = userData;
        data.forEach((elem) => {
            if (asignTo === elem.firstName) {
                elem.tasks.push(task)
                elem.taskCounts.newTask=elem.taskCounts.newTask+1;
            } });
            console.log(data);

           
            
            setUserData(data);
            

        setAsignTo('')
        setCategory('');
        setTaskDate('')
        setTaskTitle('')
        setTaskDescription('');



    }
    return (
        <div className='p-5 bg-[#2c2c2c] mt-7 rounded'>
            <form className='flex items-start justify-between w-full flex-wrap' onSubmit={(e) => {
                sumbitHandler(e)
            }}>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
                        <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 '
                            value={date}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }} />
                    </div>
                    <div>
                        <h3>Asign to</h3>
                        <input type="text" placeholder="employee name" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 '
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }} />
                    </div>
                    <div>
                        <h3>Cateory</h3>
                        <input type="text" placeholder="design , dev, etc" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 '
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }} />
                    </div>
                    <div>
                        <h3>Task Title</h3>
                        <input type="text" placeholder='make a ui design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 '
                            value={title}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }} />
                    </div>


                </div>


                <div className='w-1/2 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea name="" id='' cols='50' row="40" className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                        value={description}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}></textarea>
                    <button className='hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full bg-emerald-400 h-[40px]'>Create Task</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask