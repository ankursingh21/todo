import React, { Component } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa';
class Todoitem extends Component {
    getStyle = () => {
        return {
            background: 'lightgrey',
            padding: '.4em',
            borderBottom: '.05em solid black',
            textDecoration: this.props.todo.status ? 'line-through' : 'none',
            display:'flex',
            justifyContent:'space-between'
        }
    }
    statusChange = (e) => {
        this.props.markComplete(this.props.todo.id);
    }
    deleteTodo=()=>
    {
        this.props.deleteTodo(this.props.todo.id);
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <span>
                    <input type="checkbox" onChange={this.statusChange} />
                    {this.props.todo.title}
                </span>
                <span onClick={this.deleteTodo}><FaRegTrashAlt /></span>
                
            </div>
        )
    }
}

export default Todoitem
