import { useContext } from "react"
import "./RecipeSearch.css"
import { RecipeContext } from "../../main"
import { setSearchParamAction, setSearchTypeAction } from "../../actions/recipeActions"

export const RecipeSearch = () => {
  const { recipeState, recipeDispatch } = useContext(RecipeContext)

  const handleSearchType = (event) => {
    recipeDispatch(setSearchTypeAction(event.target.value))
  }

  const handleSearchParam = (event) => {
    recipeDispatch(setSearchParamAction(event.target.value))
  }

  return (
    <div className="search-container">
      <div>
        <input onChange={handleSearchParam} placeholder="Search the recipe" className="search-input" />
        <span className="search-filter-text">
          Filters:
        </span>
        <span className="search-type">
          <input type="radio" name="type" value="recipeName" onChange={handleSearchType} checked={recipeState.searchType === "recipeName"} />
          <span className="search-type-label">Name</span>
        </span>
        <span className="search-type">
          <input type="radio" name="type" value="ingredients" onChange={handleSearchType} checked={recipeState.searchType === "ingredients"} />
          <span className="search-type-label">Ingredients</span>
        </span>
        <span className="search-type">
          <input type="radio" name="type" value="cuisineType" onChange={handleSearchType} checked={recipeState.searchType === "cuisineType"} />
          <span className="search-type-label">Cuisine</span>
        </span>
      </div>
    </div>
  )
}