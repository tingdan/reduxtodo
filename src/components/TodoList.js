import React from 'react'

import Todo from './Todo'
import {VelocityTransitionGroup} from 'velocity-react'

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => {
        return (

            <ul className="list-group">
                <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}} runOnMount={true}>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} onDelete={() => onDeleteClick(todo.id)}/>
                ))}
                </VelocityTransitionGroup>
            </ul>

        )

}





export default TodoList;
