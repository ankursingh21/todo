import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <h1>TodoList</h1>
      </div>
    )
  }
}
const headerStyle={
    textAlign:'center',
    background:'black',
    paddingBottom:'.5em',
    color:'white',
    marginBottom:'.5em',
    height:'3em'
}
export default Header
