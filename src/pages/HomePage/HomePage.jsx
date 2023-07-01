import { useContext } from "react"
import { RecipeContext } from "../../main"
import { RecipeCard } from "../../components/RecipeCard/RecipeCard"

import "./HomePage.css"
import { RecipeAdd } from "../../components/RecipeAdd/RecipeAdd"
import { toggleAddingRecipeAction } from "../../actions/recipeActions"
import { RecipeSearch } from "../../components/RecipeSearch/RecipeSearch"
import { getFilteredRecipes } from "../../utils/getFilteredRecipes"

export const HomePage = () => {
  const {recipeState, recipeDispatch} = useContext(RecipeContext)

  const filteredRecipes = recipeState.searchParam ? getFilteredRecipes(recipeState) : recipeState?.recipes
  return (
    <div>
      <RecipeSearch />
      <div className="recipes-container">
        {
          filteredRecipes.map(recipe => 
            <RecipeCard key={recipe.id} {...recipe} />
          )
        }
        <div className="recipes-add">
          <span className="recipes-add-btn" onClick={() => recipeDispatch(toggleAddingRecipeAction())}>
            <i className="fa-solid fa-circle-plus"></i>
          </span>
        </div>
      </div>
      {recipeState.addingRecipe && <div className="recipe-add">
        <RecipeAdd />
      </div>}
    </div>
  )
}