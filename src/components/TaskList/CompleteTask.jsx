import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-4xl'>
            <div className='flex items-center justify-between p-4'>
                <h3 className='bg-blue-300 shadow-2xl text-sm font-medium rounded-xl py-1 px-4'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold px-4'>{data.title}</h2>
            <p className='px-4 text-sm mt-2'>{data.description}</p>
            <div className='mt-4 p-3'>
                <button className='bg-green-400 py-1 px-2 w-full cursor-pointer text-sm rounded-md'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask
