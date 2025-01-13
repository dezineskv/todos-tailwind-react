import React, { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTask] = useState([])

  const newTasks = [
    {
        id: 1,
        name: "new tasks"
    },
    {
        id: 2,
        name: "new tasks2"
    }
]
const handleSubmit = (e) =>{
  e.preventDefault();
  
  newTasks.push({
      id: "new",
      name: {tasks}
  })
  setTask(tasks);
  console.log(newTasks);
  console.log(tasks)
}
return (
<>    
<div className="home-page">
<h1>Todos</h1>
      
    
      <p className="read-the-docs">
        Agenda Tracker
      </p>
      <input 
            type="text" 
            placeholder="enter today's task"
            onChange={(e)=>{
                console.log(e.target.value);
                setTask(e.target.value);
            }}
            value={tasks.name}
                ></input>   
                <div className="card">
        <p>
          Today's Agenda: {tasks}
        </p>
      </div>
        <div className="mt-10"><br/>
            <button onClick={handleSubmit}>Save to Agenda</button>
        </div>
      <h5 className="">Existing Agenda</h5>
        <div className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
    {newTasks?.map((task)=> (     
        <p key={task.id}
        >task is {task.name}</p>
        ))}
        </div> 
        <p>{tasks}</p>

  </div>
</>
 

  )
}

export default App
