import React from 'react'

const taskInitialState=[]

const tasksReducer=(state=taskInitialState, action)=> {

    switch(action.type) {

        case 'LIST_TASKS' : {
            return [...action.payload]   
        }

        case 'ADD_TASKS' : {
            return [...state, action.payload]
        }

        case 'DELETE_TASK' : {
            return state.filter((ele)=> {
               return ele.id!==action.payload.id
                   
            })
        }

        case 'EDIT_TASK' : {
            return state.map((ele)=> {
                if(ele.id===action.payload.id) {
                    console.log(action.payload)
                    return {...ele, ...action.payload}
                } else {
                   return {...ele}
                }
            })
        }
         
        default : {
            return [...state]
        }
    }
}

export default tasksReducer