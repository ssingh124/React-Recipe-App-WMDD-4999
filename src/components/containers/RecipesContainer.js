import React, { Component } from 'react'
import Form from '../forms/Form'
import { getRecipes } from '../../services/api'
import Loading from '../layout/Loading'
import Recipes from '../layout/Recipes'

class RecipesContainer extends Component {
  state = {
    recipeName: '',
    recipes: [],
    isLoading: false
  }

  fetchRecipes = e => {
    const { recipeName } = this.state
    e.preventDefault()
    this.setState({
      isLoading: true
    })

    getRecipes(recipeName).then(recipes => {
      console.log('calling get recipes')
      this.setState({
        recipes,
        isLoading: false
      })
    })
  }

  handleInputChange = recipeName => {
    this.setState({
      recipeName
    })
  }

  render() {
    const { isLoading, recipes } = this.state
    return (
      <div>
        <Form
          onInputChange={this.handleInputChange}
          onSubmit={this.fetchRecipes}
        />
        {isLoading ? <Loading /> : <Recipes recipes={recipes} />}
      </div>
    )
  }
}

export default RecipesContainer
