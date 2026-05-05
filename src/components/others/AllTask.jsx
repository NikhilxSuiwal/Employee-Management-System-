import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    // console.log(authData.employees)

    return (
        <div className='bg-[#1c1c1c] p-5 rounded-2xl mt-5 text-center h-70'>
            <div className='bg-amber-400 px-2 py-2 flex justify-between rounded-xl mb-4 text-xl font-semibold'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5 '>New Task</h3>
                <h5 className='w-1/5 '>Active Task</h5>
                <h5 className='w-1/5 '>Completed</h5>
                <h5 className='w-1/5 '>Failed Task</h5>
            </div>

            <div className='h-[80%] overflow-auto'>
                {userData.map((elem, index) => {
                    return (
                        <div key={index} className='border-2 border-amber-300 mb-5 py-2 px-2 flex items-center justify-between rounded-xl'>
                            <h2 className='w-1/5'>
                                {elem.firstname}
                            </h2>
                            <h3 className='w-1/5'>
                                {elem.taskCount.newTask}
                            </h3>
                            <h5 className='w-1/5'>
                                {elem.taskCount.active}
                            </h5>
                            <h5 className='w-1/5'>
                                {elem.taskCount.completed}
                            </h5>
                            <h5 className='w-1/5 '>
                                {elem.taskCount.failed}
                            </h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTask
