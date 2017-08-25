import React, { Component } from 'react';

class BadRobot extends Component {
    
    render() {
    return (
      <div>
            <h2>Bad Robot</h2>
            <p>I hear you saying {this.props.saySomething}. Do you feel me, homie?</p>
        </div>
    );
  }
}

export default BadRobot;