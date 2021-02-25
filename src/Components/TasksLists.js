import React from 'react'
import {Paper} from '@material-ui/core'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'


const TasksLists=(props)=> {

    const tasks= useSelector(state=> state.tasks)

    return (
        <div>
            {tasks.length===0 ? (
                <Paper>
                    <div>
                        <h2>No tasks found</h2>
                        <h3>Add your first task</h3>
                    </div>
                </Paper>
            ) : (
                <div>
                    <h2>My Tasks- {tasks.length}</h2>
                    {
                        tasks.map((task, i)=> {
                            return (
                                <div key={i}>
                                 <TaskItem 
                                  {...task}  
                                 /> <br />

                                </div> 
                            )
                        })
                    }

                </div>
            )}
        </div>
    )

}

export default TasksLists