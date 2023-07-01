import { useContext } from "react"

import { RecipeContext } from "../../main"
import { addRecipeAction, editRecipeAction, toggleAddingRecipeAction } from "../../actions/recipeActions"

import "./RecipeAdd.css"

export const RecipeAdd = () => {
  const {recipeState, recipeDispatch} = useContext(RecipeContext)

  const handleAddRecipe = (event) => {
    event.preventDefault()
    const id = recipeState?.recipes[recipeState?.recipes.length-1].id + 1
    const recipeName = event.target[0].value
    const cuisineType = event.target[1].value
    const image = event.target[2].value
    const ingredients = event.target[3].value
    const cookingInstructions = event.target[4].value
    const recipe = {
      id,
      recipeName,
      image,
      cuisineType, 
      ingredients, 
      cookingInstructions
    }
    recipeDispatch(addRecipeAction(recipe))
    recipeDispatch(toggleAddingRecipeAction())
    recipeDispatch(editRecipeAction())
  }
  return (
    <div className="add-container">
      <div className="add-main">
        <span onClick={() => recipeDispatch(toggleAddingRecipeAction())} className="add-close">
          <i className="fa-solid fa-x"></i>
        </span>
        <form onSubmit={handleAddRecipe}>
          <p className="add-title">ADD RECIPE</p>
          <div className="add-field">
            <p className="add-field-label">NAME</p>
            <input className="add-field-input" placeholder="Name" required/>
          </div>
          <div className="add-field">
            <p className="add-field-label">CUISINE TYPE</p>
            <input className="add-field-input" placeholder="Cuisine Type" required/>
          </div>
          <div className="add-field">
            <p className="add-field-label">IMAGE</p>
            <input className="add-field-input" placeholder="Image" required/>
          </div>
          <div className="add-field">
            <p className="add-field-label">INGREDIENTS</p>
            <input className="add-field-input" placeholder="Ingredients" required/>
          </div>
          <div className="add-field">
            <p className="add-field-label">INSTRUCTIONS</p>
            <input className="add-field-input" placeholder="Instructions" required/>
          </div>
          <button className="add-btn">SAVE</button>
        </form>
      </div>
    </div>
  )
}