import React, { Component } from 'react'
import Todoitem from './Todoitem';

class Todo extends Component {
    render() {
        
        return (
            <div>
                {
                    this.props.todos.map((todo) =><Todoitem todo={todo} key={todo.id} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>)
                }
            </div>
        )
    }
}

export default Todo
