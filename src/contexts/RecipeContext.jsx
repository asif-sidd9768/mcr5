import { createContext, useEffect, useReducer } from "react";
import { initialState, recipeReducer } from "../reducers/RecipeReducer";

export const RecipeContext = createContext()
export const RecipeProvider = ({children}) => {
  const [recipeState, recipeDispatch] = useReducer(recipeReducer, initialState)

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipeState.recipes))
  }, [recipeState.recipes])

  return (
    <RecipeContext.Provider value={{recipeState, recipeDispatch}}>
      {children}
    </RecipeContext.Provider>
  )
}