export const addRecipeAction = (recipeData) => ({
  type:"ADD_RECIPE",
  payload: recipeData
})

export const toggleAddingRecipeAction = () => ({
  type:"TOGGLE_ADDING_RECIPE"
})

export const setSearchParamAction = (value) => ({
  type:"SET_SEARCH_PARAM",
  payload:value
})

export const setSearchTypeAction = (type) => ({
  type:"SET_SEARCH_TYPE",
  payload:type
})

export const editRecipeAction = () => ({
  type:"EDIT_RECIPE"
})

export const deleteRecipeAction = (recipeId) => ({
  type:"DELETE_RECIPE",
  payload: recipeId
})