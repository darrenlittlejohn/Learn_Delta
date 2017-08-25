import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import GoodRobot from './GoodRobot';
import BadRobot from './BadRobot';
import Kanyebot from './Kanyebot';
import Form from './Form';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saySomething: '',
            userData : {firstName: 'First Name', lastName: 'Lase Name', email: 'email'}
        }
    }
 
    updateSaySomething (saySomething) {
        this.setState({saySomething: saySomething})
    }    
    
    updateUserData(newUserData) {
        this.setState({userData: newUserData})
    }
    
    
  render() {
    return (
        <div>
            <div>
                <Input saySomething={this.state.saySomething} updateSaySomething={this.updateSaySomething.bind(this)}/>
            </div>
            <div>
                <GoodRobot saySomething={this.state.saySomething}/>
            </div>
            <div>
                <Form userData={this.state.userData} updateUserData={this.updateUserData.bind(this)} />
            </div>
        </div>
    );
  }
}

export default App;
