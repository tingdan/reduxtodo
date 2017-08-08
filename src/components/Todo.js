import React from 'react'
import {VelocityTransitionGroup} from 'velocity-react'


class Todo extends React.Component {



    render() {
        const {onClick, onDelete, completed, text} = this.props;
        return (

                <li className="list-group-item"
                    onClick={onClick}
                    style={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }}>
                    {text}
                    <span className="pull-right" onClick={onDelete}>X</span>
                </li>

        )
    }
}





export default Todo;
