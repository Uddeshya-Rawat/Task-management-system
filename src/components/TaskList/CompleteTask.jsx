import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-[300px] w-[300px] bg-emerald-400 rounded-xl p-5 overflow-auto' id="taskList">
            <div className='flex justify-between items-center'>
                <h1 className='bg-red-600 text-sm px-3 py-1 rounded font-semibold'>{data.category}</h1>
                <h4 className='font-semibold'>{data.date}</h4>
            </div>
            <h2 className='text-xl font-semibold mt-5'>{data.title}</h2>
            <p className='mt-3 font-medium'>{data.description}</p>
             <div className='mt-2'>
                <button className='w-full bg-green-500'>Complete</button>

             </div>
        </div>
  )
}

export default CompleteTask