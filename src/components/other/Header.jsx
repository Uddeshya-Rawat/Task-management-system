import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {
  
  const logoutUser=()=>{
    localStorage.setItem("loggedInUser",'')
    // window.location.reload()
    props.changeUser('')
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-bold'>Hello <br/><span className='text-3xl font-semibold'>{props.data.firstName}</span> </h1>
        <button 
        onClick={logoutUser}
         className='text-xl font-extrabold px-3 py-2 rounded-xl bg-red-600 '>Log Out</button>
    </div>
  )
}

export default Header