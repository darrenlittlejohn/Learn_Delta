import React, { Component } from 'react';

class Input extends Component {
    handleChange(e) {
        this.props.updateSaySomething(e.target.value)
    }
  render() {
    return (
        <div>    
            <h1>Robo Active Listening</h1>
            <p>Say something <input value={this.props.saySomething} onChange={this.handleChange.bind(this)} /></p>
        </div>
    );
  }
}

export default Input;