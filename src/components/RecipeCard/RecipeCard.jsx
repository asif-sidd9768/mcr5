import { NavLink } from "react-router-dom"

import "./RecipeCard.css"
import { useContext } from "react"
import { RecipeContext } from "../../main"
import { deleteRecipeAction } from "../../actions/recipeActions"

export const RecipeCard = ({id, recipeName, image, ingredients, cookingInstructions, cuisineType}) => {
  const {recipeState, recipeDispatch} = useContext(RecipeContext)

  const handleDeleteRecipe = (event) => {
    event.stopPropagation()
    recipeDispatch(deleteRecipeAction(id))
  }
  
  return (
    <div className="card-container">
        <img src={image} className="card-image" />
        <NavLink className="card-link" to={`/recipe/${id}`}>
          <p className="card-title">{recipeName}</p>
          <div className="card-fields">
            <div className="card-field">
              <span>Cuisine Type</span>
              <span>{cuisineType}</span>
            </div>
            <div className="card-field">
              <span>Ingredients</span>
              <span>See Recipe<i className="fa-solid fa-angle-right"></i></span>
            </div>
            <div className="card-field">
              <span>Instructions</span>
              <span>See Recipe<i className="fa-solid fa-angle-right"></i></span>
            </div>
          </div>
        </NavLink>
        <div className="card-btns">
          <span className="card-btn"><i className="fa-solid fa-pen"></i></span>
          <span onClick={handleDeleteRecipe} className="card-btn"><i className="fa-solid fa-trash"></i></span>
        </div>
    </div>
  )
}