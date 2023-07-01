import { RECIPE_DATA } from "../db/recipeData";

export const initialState = {
  // recipes: JSON.parse(localStorage.getItem("recipes")) || RECIPE_DATA,
  recipes: RECIPE_DATA,
  addingRecipe: false,
  searchParam: "",
  searchType: "recipeName",
  editingRecipe: false
}

export const recipeReducer = (state, action) => {
  switch(action.type){
    case "ADD_RECIPE":
      return {...state, recipes: [...state.recipes, action.payload]}
    case "TOGGLE_ADDING_RECIPE":
      return {...state, addingRecipe: !state.addingRecipe}
    case "SET_SEARCH_PARAM":
      return {...state, searchParam: action.payload}
    case "SET_SEARCH_TYPE":
      return {...state, searchType: action.payload}
    case "EDIT_RECIPE":
      return {...state, editingRecipe: !state.editingRecipe}
    case "DELETE_RECIPE":
      return {...state, recipes: state.recipes.filter(({id}) => id !== action.payload)}
    default:
      return {...state}
  }
}