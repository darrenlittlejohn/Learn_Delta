import React, { Component } from 'react';
import logo from './martini-glass.svg';
import Header from './header.js';
import Content from './content.js';
import Recipes from './recipes.js';
import './App.css';
import { Grid } from 'react-bootstrap';


class App extends Component {
    constructor(props){               
    super(props)
    this.state = {
//      currentPage: "About"
      recipes: [
        {
            name: 'Meatballs',
            image: 'http://cdn.sheknows.com/articles/crave/mint_drink.jpg'
        },
        {
            name: 'Mac & Cheese',
            image: 'https://cdn.liquor.com/wp-content/uploads/2016/11/16132003/margarita-rocks-salt-720sq.jpg'
        },
        {
            name: 'Taco Salad',
            image: 'http://www.foodofy.com/wp-content/uploads/2015/09/flat-belly-drink-4.jpg'
        }
      ]
    }
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Header name="John"/>
        </div>
            <Content recipes={this.state.recipes} />
        <div>
            
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
