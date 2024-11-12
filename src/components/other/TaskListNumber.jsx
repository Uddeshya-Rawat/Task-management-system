import React from 'react'

function TaskListNumber({data}) {
    console.log(data)
  return (
    <div className='flex w-full justify-between gap-5 mt-10 '>
        <div className=' h-40 w-[30%] bg-red-500 rounded-xl px-10 py-6'>
            <h1 className='text-4xl font-semibold'>{data.taskCounts.newTask}</h1>
            <h3 className='text-3xl font-semibold'>New Task</h3>
        </div>
        <div className=' h-40 w-[30%] bg-orange-400 rounded-xl px-10 py-6'>
            <h1 className='text-4xl font-semibold'>{data.taskCounts.completed}</h1>
            <h3 className='text-3xl font-semibold'>Completed Task</h3>
        </div>
        <div className=' h-40 w-[30%] bg-blue-400 rounded-xl px-10 py-6'>
            <h1 className='text-4xl font-semibold'>{data.taskCounts.active}</h1>
            <h3 className='text-3xl font-semibold'>Accepted Task</h3>
        </div>
        <div className=' h-40 w-[30%] bg-green-400 rounded-xl px-10 py-6'>
            <h1 className='text-4xl font-semibold'>{data.taskCounts.failed}</h1>
            <h3 className='text-3xl font-semibold'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber