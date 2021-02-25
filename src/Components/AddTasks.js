import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Paper} from '@material-ui/core'
import styled from 'styled-components'
import {startPostTasks} from '../Action/tasksAction'
import TasksForm from './TasksForm'

const Styledh2 = styled.h2`
    text-align: center;
`

const AddTasks=(props)=> {
    const [isSaved, setIsSaved]= useState(false)

    const dispatch=useDispatch()

    const formSubmit = (task) => {
        dispatch(startPostTasks(task))
        setIsSaved(true) 
    }

    const  toggleIsSaved = (props) => {
        setIsSaved(false)
    }


    return (
        <div>
            <Paper>
            <Styledh2>Add Task</Styledh2>
            <TasksForm 
             formSubmit={formSubmit}
             isSaved={isSaved}
             toggleIsSaved={toggleIsSaved}
             />
             

            </Paper>

        </div>
    )

}

export default AddTasks