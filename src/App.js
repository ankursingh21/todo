import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Meeting with friends",
          status: false
        },
        {
          id: 2,
          title: "Wash Clothes",
          status: false
        },
        {
          id: 3,
          title: "call nishant ",
          status: false
        }
      ]

    }
  }
  markComplete =(id)=>{
    let list=this.state.todos.map((todo)=>{
      if(todo.id===id)
      {
        todo.status=!todo.status
      }
      return todo
    })
    let completedList=list.filter((todo)=>todo.status===true)
    let inCompletedList=list.filter((todo)=>todo.status!==true)
    let task=[...completedList,...inCompletedList];
    this.setState({
      todos:task
    })
  }
  deleteTodo=(id)=>{
    let list= this.state.todos.filter((todo)=>todo.id!==id)
    this.setState({
      todos:list
    })
  }
  addTodo =(task)=>{
    let list=[...this.state.todos,task];
    this.setState({
      todos:list
    })
  }
  render() {
    return (
      <div className="App">
      <Header/>
      <AddTodo addTodo={this.addTodo}/>
      <Todo todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
