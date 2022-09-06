import './TaskDom.css'
import React from 'react'



const TaskDom = (props) => {
 const Delete = props.Delete
 const DeleteTask = ()=>{
    Delete(props.Sno)
 }
  return (
    <div>
        <h2>{props.taskname}</h2>
       <button type = "button" onClick={DeleteTask}>delete</button>
    </div>
  )
}
export default TaskDom