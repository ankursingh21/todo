import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            title:''
        }
    }
    titleAdd=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    add=()=>
    {
        if(this.state.title!=='')
        {
            let taskid=Math.floor(Math.random()*1000);
            let obj={
                id:taskid,
                title:this.state.title,
                status:false
            }
            this.props.addTodo(obj);
            this.setState({
                title:''
            })
            
        }
        else
        {
            alert("cannot add blank task");
        }
    }
    render() {
        return (
            <div style={{display:'flex',marginBottom:'.2em'}}>
                <input type="text" name="title" onChange={this.titleAdd} value={this.state.title} style={{width:'100%',height:'2em'}}/>
                <button style={{width:'5em'}} onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default AddTodo
