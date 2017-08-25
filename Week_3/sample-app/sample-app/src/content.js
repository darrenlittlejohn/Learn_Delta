import React, { Component } from 'react'
import { Grid, Col, Row, Image } from 'react-bootstrap';

class Content extends Component{
 render() {
    let recipes = this.props.recipes.map(function(recipe){
      return(
          <Col xs={12} md={6} key={recipe.name}>
            <h2>{recipe.name}</h2>
            <Image src={recipe.image} responsive />
          </Col>
      )
    })
    return(
      <Grid>
        <Row>
            {recipes}
        </Row>
      </Grid>
    )
  }
}

export default Content;

//          <Col xs={12} md={6}>
//            <h2>this.props.name</h2>
//            <Image src="http://cdn.sheknows.com/articles/crave/mint_drink.jpg" responsive />
//          </Col>
//          <Col xs={12} md={6}><Image src="https://cdn.liquor.com/wp-content/uploads/2016/11/16132003/margarita-rocks-salt-720sq.jpg" responsive /></Col>
//        </Row>
//        <Row>
//          <Col xs={12} md={6}><Image src="http://www.foodofy.com/wp-content/uploads/2015/09/flat-belly-drink-4.jpg" responsive /></Col>
//          <Col xs={12} md={6}><Image src="https://www.thecocktailproject.com/sites/default/files/styles/standard-recipe-image-mobile/public/basic-dekuyper-banana-mai-tai.jpg?itok=086wyQcJ" responsive /></Col>