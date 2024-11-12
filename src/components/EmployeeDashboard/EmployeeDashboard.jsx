import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  console.log(props.data);
  return (
    <div className='p-10 bg-[#1c1c1c] h-full w-screen text-white '>
        <Header data={props.data} changeUser={props.changeUser}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard