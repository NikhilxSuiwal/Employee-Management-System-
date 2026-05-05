import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler= (e)=>{
        e.preventDefault();
        handleLogin(email,password);
        

        setEmail('')
        setPassword('')
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='bg-gray-400 p-20 rounded-2xl shadow-[0_12px_16px_rgba(0,0,0,0.2)]'>
        <h2 className='cmpny text-center mb-8 text-5xl'>Sign In</h2>
        <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
         className='flex flex-col items-center justify-center'>
            <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}
             required className='mail shadow-2xl  rounded-full py-2 px-4 text-xl outline-none' type="email" placeholder='Enter your Mail' />
            <input 
                value={password}
                onChange={(r)=>{
                    setPassword(r.target.value)
                }}
            required className='pass shadow-2xl rounded-full mt-5 py-2 px-4 text-xl outline-none' type="password" placeholder='Enter Password' />
            <button className='logged hover:bg-gray-700 text-white bg-gray-600 rounded-full w-full mt-8 cursor-pointer px-4 py-2'>Log In</button>
        </form>

      </div>
    </div>
  )
}

export default Login
