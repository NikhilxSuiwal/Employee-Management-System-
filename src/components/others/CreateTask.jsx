import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [category, setCategory] = useState("")

    //  const [newTask, setNewTask] = useState({})

    const submitHandler= (e)=>{
        e.preventDefault()

        const newTask = {
            title: taskTitle,   // 🔥 yaha change
            date: taskDate,
            category,
            assignTo,
            description: taskDescription,
            active: true,
            newTask: true,
            completed: false,
            failed: false
        }

        const data= userData
        
        const updatedData = userData.map((elem) => {
            if (assignTo === elem.firstname) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, newTask],
                    taskCount: {
                        ...elem.taskCount,
                        newTask: elem.taskCount.newTask + 1
                    }
                }
            }
            return elem
        })
    
        setUserData(updatedData)

        console.log(data)

        setTaskTitle("")
        setTaskDate("")
        setAssignTo("")
        setCategory("")
        setTaskDescription("")
    }

  return (
    <div className='p-5 bg-[#1c1c1e] mt-7 rounded-2xl'>
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }} className='flex w-full flex-wrap flex-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-md mb-2 mt-2'>Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e)=>{
                                    setTaskTitle(e.target.value);
                                }}
                             className='border-amber-400 rounded-xl px-2 py-1 w-4/5 bg-transparent border-[2px]' type="text" placeholder='Make a UI design' />
                        </div>
                        <div>
                            <h3 className='text-md mb-2 mt-2'>Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e)=>{
                                    setTaskDate(e.target.value)
                                }}
                             className='border-amber-400 rounded-xl px-2 py-1 w-4/5 bg-transparent border-[2px]' type="date" />
                        </div>
                        <div>
                            <h3 className='text-md mb-2 mt-2'>Assign To</h3>
                            <input
                                value={assignTo}
                                onChange={(e)=>{
                                    setAssignTo(e.target.value)
                                }}
                             className='border-amber-400 rounded-xl px-2 py-1 w-4/5 bg-transparent border-[2px]' type="text" placeholder='Employee Name' />
                        </div>
                        <div>
                            <h3 className='text-md mb-2 mt-2'>Category</h3>
                            <input 
                                value={category}
                                onChange={(e)=>{
                                    setCategory(e.target.value);
                                }}
                            className='border-amber-400 rounded-xl px-2 py-1 w-4/5 bg-transparent border-[2px]' type="text" placeholder='Design, Dev, etc.' />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className=' text-sm mb-1'>Description</h3>
                        <textarea 
                            value={taskDescription}
                            onChange={(e)=>{
                                setTaskDescription(e.target.value);
                            }}
                        className='border-amber-400 rounded-xl px-2 py-1 w-4/5 bg-transparent border-[2px]' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-amber-400 py-3 px-5 w-[82%] text-md hover:bg-amber-500 cursor-pointer mt-4 rounded-xl'>Create Task</button>
                    </div>

                </form>
            </div>
  )
}

export default CreateTask


