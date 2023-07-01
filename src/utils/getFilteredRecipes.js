export const getFilteredRecipes = (recipeState) => {
  switch(recipeState.searchType){
    case "recipeName":
      return recipeState.recipes.filter(({recipeName}) => recipeName.toLowerCase().includes(recipeState.searchParam.toLowerCase()))
    case "cuisineType":
      return recipeState.recipes.filter(({cuisineType}) => cuisineType.toLowerCase().includes(recipeState.searchParam.toLowerCase()))
    case "ingredients":
      return recipeState.recipes.filter(({ingredients}) => ingredients.find(i => i.toLowerCase().includes(recipeState.searchParam.toLowerCase())) )
  }
}