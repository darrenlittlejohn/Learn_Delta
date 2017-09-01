import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import RecipeIndex from './RecipeIndex'
import Footer from './Footer'
import RecipeDetail from './RecipeDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header name='Bob' />
          <Route exact path="/" component={RecipeIndex} />
          <Route path='/recipes/:id' component={RecipeDetail} />
          <div>
          <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
