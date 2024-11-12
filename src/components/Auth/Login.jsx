import React, { useState } from 'react'

function Login({handleLogin}) {
   
   const[email,setEmail]=useState("")
   const[password,setPassword]=useState('');

  let submitHandler=(e)=>{
     e.preventDefault();
     console.log("hello guys , Form submitted");
     console.log(`email:${email} , password:${password}`)
     handleLogin(email,password) // pass email and password to check
     setEmail('')
     setPassword('')
     

     
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-[#1c1c1c] '>
        
        <div className='border-2 border-emerald-600 p-10 rounded-2xl shadow-2xl bg-[#2c2c2c]'>
            <h1 className='text-4xl text-white text-center mt-6 font-bold'>Login</h1>
            <form 
            onSubmit={(e)=>{
                submitHandler(e);
            }}
            className=' flex flex-col items-center justify-center p-20 '>
                <input
                value={email}
                onChange={(e)=>{
                            setEmail(e.target.value)
                }}
                required className="border-2 border-emerald-500 py-3 text-white px-5 outline-none rounded-full text-xl bg-transparent placeholder:text-white" type="email" placeholder='Enter your email'/>
                
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value);
                }}
                 className="border-2 border-emerald-500 py-3 text-white px-5 outline-none rounded-full text-xl bg-transparent placeholder:text-white mt-5" type="password" placeholder='Enter password'/>

                <button className="border-2 border-emerald-500 py-3 text-white px-5 outline-none rounded-full text-xl bg-emerald-600 placeholder:text-white w-44 mt-20 font-semibold" >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login