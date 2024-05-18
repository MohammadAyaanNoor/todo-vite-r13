import React, { useContext } from 'react'
import { datacontext } from '../context/DataContext'


const Show = () => {
    const [tasks,settasks] = useContext(datacontext)

    const CompleteHandler = (index) =>{
        console.log(index)
        const copyTasks = [...tasks];
        copyTasks[index].completed = !copyTasks[index].completed;
        settasks(copyTasks);
        localStorage.setItem('tasks',JSON.stringify(copyTasks))
    }
    const DeleteHandler =(id)=>{
        settasks(tasks.filter((t)=>t.id != id))
        localStorage.setItem('tasks',JSON.stringify(tasks.filter((t)=>t.id != id)))

    }
  return (
    <ul className="list-none w-[35%] ">
    {tasks.length > 0?(tasks.map((task,index)=>{
        
        return(
            <li
            key={index}
            className="mb-5 flex justify-between items-center border rounded-xl p-5"
        >
        <div className="flex items-center">
            <div
            onClick={()=>CompleteHandler(index)}
                className={`${task.completed ? "bg-green-500":"border border-white bg-transparent"} mr-4 rounded-full w-[30px] h-[30px]  border-white`}
            ></div>
            <h1
                className={`${
                    task.completed ? "line-through" : ""
                } text-2xl font-extrabold text-yellow-100`}
            >
                {task.title}

            </h1>
        </div>
        <div className="flex gap-3 text-2xl text-yellow-100">
            <i className="ri-file-edit-line"></i>
            <i onClick={()=>DeleteHandler(index)} className="ri-delete-bin-3-line"></i>
        </div>
    </li>
        )
    })):(
        <h1 className='text-white text-2xl ml-40'>No pending tasks</h1>
    )}
    
</ul>
  )
}

export default Show

