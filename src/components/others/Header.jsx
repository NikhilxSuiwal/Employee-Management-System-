import React, { useState } from 'react'

const Header = (props) => {
  const logOutUser= ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('');
  }

  return (
    <div className='flex items-end justify-between'>
      
      <h1 className='text-2xl font-light'>Hello <br /> <span className='text-3xl font-bold'>
        {props.data?.firstname || "Admin"} 👋🏻
        </span> </h1>
      <button onClick={logOutUser} className='bg-amber-400 text-xl font-medium px-6 py-2 rounded-xl hover:bg-red-600 cursor-pointer'>Log Out</button>
    </div>
  )
}

export default Header
