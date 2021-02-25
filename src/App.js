import React, {useState} from 'react'
import {Paper} from '@material-ui/core'
import styled from 'styled-components'
import TasksLists from './Components/TasksLists'
import AddTasks from './Components/AddTasks'


const App=(props)=> {

  const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
`

  
  return (
    <div>

      <Paper>
      <h1 style={{textAlign:'center'}}>Welcome To TaskBox Project</h1>
      </Paper>

      <StyledDiv>
        <TasksLists />
        <AddTasks />
      </StyledDiv>

  
    </div>
  )
}

export default App;
