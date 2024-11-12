import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import Alltask from '../other/Alltask'

const AdminDashboard = (props) => {
    return (
        <>
            <div className='h-full w-full p-10 bg-[#1c1c1c] text-white'>
                <Header data={props.data} changeUser={props.changeUser} />
                <CreateTask/>
                <Alltask/>
            </div>
        </>
    )
}

export default AdminDashboard