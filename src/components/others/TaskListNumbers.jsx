import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex  mt-10 justify-between w-full gap-5'>
      <div className='p-10 rounded-2xl py-6 px-9 w-[45%] bg-red-400'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.newTask}</h2>
        <h3 className='text-2xl font-medium'>New Task</h3>
      </div>
      <div className='p-10 rounded-2xl py-6 px-9 w-[45%] bg-blue-400'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.completed}</h2>
        <h3 className='text-2xl font-medium'>Completed Task</h3>
      </div>
      <div className='p-10 rounded-2xl py-6 px-9 w-[45%] bg-amber-400'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.active}</h2>
        <h3 className='text-2xl font-medium'>Accept Task</h3>
      </div>
      <div className='p-10 rounded-2xl py-6 px-9 w-[45%] bg-emerald-400'>
        <h2 className='text-4xl font-semibold'>{data.taskCount.failed}</h2>
        <h3 className='text-2xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
