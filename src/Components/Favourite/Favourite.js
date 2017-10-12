import React from 'react'

class Favourite extends React.Component {

  state = {
    favourites: JSON.parse(localStorage.getItem('favourites')) || [],
    filteredRecipes: []
  }

  componentDidMount() {
    fetch(
        `${process.env.PUBLIC_URL} /data/database.json` // template string usage
    ).then(
        response => response.json()
    ).then((recipes) => {
          let filteredRecipes = recipes.filter((recipe) => {
            return this.state.favourites.includes(parseInt(recipe.uid))
          })
          this.setState({
            filteredRecipes: filteredRecipes
          })
        }
    )
  }

  render() {
    return (
        this.state.filteredRecipes.map((recipe, index) => {
          return <li key={index}>{recipe.name}</li>
        })
    )
  }


}
export default Favourite