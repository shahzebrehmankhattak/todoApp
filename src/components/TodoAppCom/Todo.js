import React from 'react'
import {Typography } from 'antd'
import {
    EditOutlined,
    DeleteOutlined,
  
  } from '@ant-design/icons';

const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  
  return (
    < >


        <div className="Todo">
        <Typography className={`${task?.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</Typography>
        <div>
        <EditOutlined className="edit-icon"  onClick={() => editTodo(task.id)}/>
        <DeleteOutlined onClick={() => deleteTodo(task.id)} className="delete-icon"/>
        </div>
    </div>
       
    
    </>
  )
}



export default Todo