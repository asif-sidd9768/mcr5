import { useContext } from "react"
import { useParams } from "react-router-dom"
import { RecipeContext } from "../../main"

import "./DetailPage.css"

export const DetailPage = () => {
  const { recipeState } = useContext(RecipeContext)
  const { recipeId } = useParams()
  const foundRecipe = recipeState?.recipes?.find(({id}) => id === Number(recipeId))

  if(!foundRecipe){
    return <p>Loading...</p>
  }

  return (
    <div className="detail-container">
      <p className="detail-title">{foundRecipe?.recipeName}</p>
      <div className="detail-content">
        <div>
          <img src={foundRecipe.image} className="detail-image" />
        </div>
        <div className="detail-data">
          <p className="detail-field-cuisine">
            <span className="detail-label">Cuisine</span>: {foundRecipe?.cuisineType}
          </p>
          <p className="detail-field">
            <span className="detail-label">Ingredients</span>: {foundRecipe?.ingredients?.join(",")}
          </p>
          <div className="detail-field">
            <span className="detail-label">Instructions</span>:
            <div>
              {
                foundRecipe?.cookingInstructions.map((ins, index) => 
                  <p key={index}>{ins}</p>  
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}