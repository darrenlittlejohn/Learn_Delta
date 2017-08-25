import React, { Component } from 'react'

class Header extends Component{
  render(){
    return(
      <div>
        <h1>Hello {this.props.name} Best Beverages in San Diego</h1> 
      </div>
    )
  }
}

export default Header;