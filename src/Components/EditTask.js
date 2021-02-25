import React, {useState} from 'react'
import TasksForm from './TasksForm'
import {useDispatch} from 'react-redux'
import {startEditTask} from '../Action/tasksAction'

const EditTask=(props)=> {
    const {id, title, status, handleToggle}= props

    const dispatch= useDispatch()

    const formSubmit = (task) => {
        console.log('task', task )
        dispatch(startEditTask(task))
        handleToggle()
    }
   
     
    return (
        <div>
         <h1>Edit Task</h1>

         <TasksForm 
         id={id} 
         title={title}
         status={status}
         formSubmit={formSubmit}
         /> 
        </div>
    )
}

export default EditTask