import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import configureStore from './store/configureStore'
import {startGetTasks} from './Action/tasksAction'

const store= configureStore()
console.log(store.getState())

store.subscribe(()=> {
  console.log(store.getState())
})

if(true) {
  store.dispatch(startGetTasks())
}

const ele= (
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </Provider>

)


ReactDOM.render(
    ele,document.getElementById('root')
);


