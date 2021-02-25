import React, {useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'



const TasksForm=(props)=> { 
    const { isSaved, toggleIsSaved, formSubmit, id: slNo, title: taskTitle, status: taskStatus} = props 
    const [id, setId] = useState(slNo ? slNo : uuidv4())
    const [title, setTitle] = useState(taskTitle ? taskTitle : '')
    const [status, setStatus] = useState(taskStatus ? taskStatus : false)

    useEffect(() => {
        if(isSaved) {
            toggleIsSaved()
            setId(uuidv4())
            setTitle('')
            setStatus('')
        }
    }, [isSaved])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            id,
            title,
            status
        }

        formSubmit(formData)

    }

    return (
        <div>

<Paper elevation={3}>
                <form onSubmit={handleSubmit}>
                    
                    <TextField 
                        variant='outlined'
                        label='Title'
                        value={title}
                        onChange={handleTitleChange}
                    /> <br /><br />
                    
                    <input 
                    type='checkbox'
                    checked={status}
                    onChange={handleStatusChange}
                    />

                    <label>Completed</label> <br /><br />
                    
                    <Button variant="contained" color="primary" type='submit' style={{'marginLeft' :'80px'}}>
                            save
                    </Button>
                </form>
            </Paper>

        </div>
    )
}

export default TasksForm