import './App.css';
import React from 'react'

import { useState } from 'react';
import TaskDom from './TaskDom';


const initialState = {
  TaskName: ''
}
const App = () => {
  const [Task, setTask] = useState(initialState)
  const [TaskList, setTaskList] = useState([])


  const TaskSetter = (e) => {
    setTask({ ...Task, TaskName: e.target.value })
  }

  const SetTask = (e) => {
    e.preventDefault()
    setTaskList([...TaskList, Task])
   
  }


const deleteTask = (id)=>{
  const FilteredTask = TaskList.filter((value,index)=>{
    return index!==id
  })

  setTaskList(FilteredTask)
}


  return (
    <div className='main-box'>
      <div className='TaskDom'>
        <input type="text" value={Task.TaskName} onChange={TaskSetter} ></input>
        <button type='button' onClick={SetTask}>Add Task</button>
      </div><hr />


      <div className='TaskDisplay'>

        {TaskList.map((value, index) => {
          return <TaskDom

            taskname={value.TaskName}
            Sno={index}
            key={index}
            Delete = {deleteTask}


          />
        })}
      </div>


    </div>
  )
}

export default App