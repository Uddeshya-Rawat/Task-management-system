import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {
    const[userData,setUserData]= useContext(AuthContext);
    return (<>

        <div className='bg-[#2c2c2c] p-5 w-full mt-7 rounded h-50   ' >
            <div className='bg-red-600 py-2 px-4 rounded-lg w-full flex justify-between mb-3'>
                <h2 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'>Employee Name</h2>
                <h3 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'> New Task</h3>
                <h5 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'>Active Task</h5>
                <h5 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'>Completed</h5>
                <h5 className='w-1/5 font-medium text-lg rounded-lg px-2 py-1 text-center'>Failed</h5>


            </div>
           <div className='h-[80%] overflow-auto ' id="taskList">
           {userData.map(function (elem,idx) {
            console.log(userData);
                return (
                    <div className='border-2 py-2 px-4 rounded-lg w-full flex justify-between mb-3' key={idx}>
                        <h2 className='w-1/5 font-medium text-lg text-white rounded-lg px-2 py-1 text-center'>{elem.firstName}</h2>
                        <h3 className='w-1/5 font-medium text-lg text-blue-400 rounded-lg px-2 py-1 text-center'>{elem.taskCounts.newTask}</h3>
                        <h5 className='w-1/5 font-medium text-lg text-yellow-300 rounded-lg px-2 py-1 text-center'>{elem.taskCounts.active}</h5>
                        <h5 className='w-1/5 font-medium text-lg text-green-500 rounded-lg px-2 py-1 text-center'>{elem.taskCounts.completed}</h5>
                        <h5 className='w-1/5 font-medium text-lg text-red-600 rounded-lg px-2 py-1 text-center'>{elem.taskCounts.failed}</h5>-5rgb 
                    </div>)
            })}
           </div>



        </div>
    </>
    )
}

export default Alltask