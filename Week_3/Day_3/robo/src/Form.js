import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
    super(props)
    this.state = props.userData
    }
    
    handleSubmit(event){
    console.log("Form submitted!")
    this.props.updateUserData(this.state)
    event.preventDefault()
    }
    
    handleChange(event){
    const target = event.target
    const attribute = target.name
    const value = target.value
    this.setState({[attribute]: value})
  } 
  render() {
    return (
        <form onSubmit={this.handleSubmit.bind(this)}>
            <label>First Name</label>
            <input name="firstName" value={this.state.firstName} onChange={this.handleChange.bind(this)} /><br />
            <label>Last Name</label>
            <input name="lastName" value={this.state.lastName} onChange={this.handleChange.bind(this)}/><br />
            <label>Email</label>
            <input name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/><br />
            <input value="Submit" type="submit" />
        </form>
    );
  }
}

export default Form;