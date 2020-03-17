import React, { Component } from 'react'
import { getRecipe } from '../../services/api'
import Recipe from '../layout/Recipe'
import Loading from '../layout/Loading'

class RecipeContainer extends Component {
  state = {
    isLoading: false,
    recipe: {}
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    const { uri } = this.props.location.state

    getRecipe(uri).then(recipe => {
      console.log('recipe', recipe)
      this.setState({
        isLoading: false,
        recipe
      })
    })
  }

  render() {
    const { isLoading, recipe } = this.state
    const { label, image, source, url } = recipe
    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <Recipe label={label} image={image} source={source} url={url} />
        )}
      </div>
    )
  }
}

export default RecipeContainer
