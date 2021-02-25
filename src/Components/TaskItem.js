import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { Button, Paper } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import styled from 'styled-components'
import {startDeleteTask} from '../Action/tasksAction'
import EditTask from './EditTask'

const Styledh3=styled.h3 `
  text-align:center;
  `;

const TasksItem=(props)=> {
    const {id, status, title}= props
    const [toggle, setToggle]= useState(false)
    const dispatch=useDispatch()

    const handleToggle = (e) => {
        const result = !toggle
        setToggle(result)
    }

    const handleRemove = (id) => {
        const confirmRemove = window.confirm('Are you sure?')
        if(confirmRemove) {
            dispatch(startDeleteTask(id))
        }
    }

    return (
        <div>
            {toggle ? (
          <Paper>
          <div>
           <EditTask 
            id={id}
            title={title}
            status={status}
            handleToggle={handleToggle}/> <br />
            <Button variant="contained" color="secondary" onClick={handleToggle}
                    style={{marginLeft:'72px'}}>
                        cancel
           </Button>

          </div>

          </Paper>
            ) : (
                <Paper>
                    <div>
                        <Styledh3>{title}</Styledh3> <br />
                        <Checkbox 
                        checked={status}
                        color='primary'
                        inputProps={{'aria-label': 'secondary checkbox'}}/>

                        <label>Completed</label> <br />
                        <Button variant="contained" color="primary" onClick={handleToggle}>
                        <EditIcon />
                        </Button>

                        <Button variant='contained' color='secondary' onClick={()=> {
                            handleRemove(id)
                        }}>
                            <DeleteIcon />
                        </Button>
                    </div>

                </Paper>
            )}


        </div>
    )
}

export default TasksItem 