import React, { Component } from 'react';
import logo from './newLogo.jpeg';
import Header from './header.js'
import Recipes from './Recipes'
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
          <Recipes />
      </div>
    );
  }
}

export default App;
