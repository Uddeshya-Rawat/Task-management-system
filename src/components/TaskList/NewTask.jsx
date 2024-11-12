import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-[300px] w-[300px] bg-red-400 rounded-xl p-5 overflow-auto' id="taskList">
            <div className='flex justify-between items-center'>
                <h1 className='bg-red-600 text-sm px-3 py-1 rounded font-semibold'>{data.category}</h1>
                <h4 className='font-semibold'>{data.date}</h4>
            </div>
            <h2 className='text-xl font-semibold mt-5'>{data.title} </h2>
            <p className='mt-3 font-medium'>{data.description}</p>
             <div className='mt-4'>
                    <button className='bg-red-800 py-1 px-2 text-sm rounded-lg'>Accept Task</button>
             </div>
        </div>
  )
}

export default NewTask