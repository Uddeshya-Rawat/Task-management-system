import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  return (
    <div id="taskList" className='h-[55%] w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto '>
        {data.tasks.map((task,i)=>{
            
            if(task.active){
                return <AcceptTask  key={i} data={task}/>
            }
            if(task.newTask){
                return <NewTask  key={i} data={task}/>
            }
            if(task.completed){
                return <CompleteTask  key={i} data={task}/>
            }
            if(task.failed){
                return <FailedTask  key={i} data={task}/>
            }
        })}
        
        

    </div>
  )
}

export default TaskList