import React from 'react'
import axios from 'axios'

const setTasks=(tasks)=> {
    return {
        type: 'LIST_TASKS',
        payload: tasks
    }
}

export const startGetTasks=()=> {
    return(dispatch)=> {
        axios.get('http://localhost:3033/api/tasks')
        .then(res=> {
            const tasks= res.data
            dispatch(setTasks(tasks))
        })
        .catch(err=> {
            alert(err.message)
        })
    }
}

const setTaskPost=(tasks)=> {
    return {
        type: 'ADD_TASKS',
        payload: tasks
    }
}

export const startPostTasks=(formData)=> {
    return (dispatch)=> {
        axios.post('http://localhost:3033/api/tasks', formData)
        .then(res=> {
            const tasks= res.data
            dispatch(setTaskPost(tasks))
        })
        .catch(err=> {
            alert(err.message)
        })
    }
}


const deleteTask=(task)=> {
    return {
        type: 'DELETE_TASK',
        payload: task
    }
}

export const startDeleteTask=(id)=> {
    return (dispatch)=> {
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
        .then(res=> {
            console.log('res', res.data)
            const task= res.data
            dispatch(deleteTask(task))
        })
        .catch(err=> {
            alert(err.message)
        })
    }

}

const editTask=(task)=> {
   return {
       type: 'EDIT_TASK',
       payload: task
   }
}

export const startEditTask=(task)=> {
    console.log('editaction', task)
    return (dispatch)=> {
        axios.put(`http://localhost:3033/api/tasks/${task.id}`, task)
        .then(res=> {
            console.log('edit', res.data)
            const task=res.data
            dispatch(editTask(task))
            
        })
        .catch(err=> {
            alert(err.message)
        })
    }
}