import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const AppMain = () => (
  <div className="container" style={{width: "500px"}}>
      <h2>TODO APP with React Animation</h2>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default AppMain
