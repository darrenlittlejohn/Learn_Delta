import React, { Component } from 'react';
import Globe from './512px-Globe.gif';
import {
  PageHeader,
  Table, Grid,
  Row, Col
} from 'react-bootstrap';
import Navbar from './Navbar.js';
import Header from './Header.js';
import neoData from './sample-neo.js';
import './App.css';

class App extends Component {
    constructor(props){
    super(props)
        
         this.state = {
      rawData: neoData,
      apiUrl: "http://api.open-notify.org/iss-now.json"
    }
        
      
    }
componentWillMount(){
 let self = this;
    fetch(`${this.state.apiUrl}`).then(function(rawResponse) {
        return rawResponse.json()
  }).then(function(rawResponse) {
        self.setState({rawData:rawResponse})
        
    }
)}
 render() {
      const c = this.state.rawData.iss_position
      
    return (
    <div>
        <Grid>
            <Header />
            <Row>
                <Col xs={12}>
                    {<Navbar />}
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <img src={Globe} className="App-logo" alt="Globe" />
                </Col>
            </Row>
            <Row>
                <Col xs={6}> 
                    <p>{c.longitude}</p>
                    <p>{c.latitude}</p>
                </Col>
            </Row>
        </Grid>
    </div>
    );
  }
}

export default App;
