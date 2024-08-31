import recipedata from "./recipe.json";

function IngredientList() {
  return (
    <div>
      <h3>Ingredients</h3>
      {recipedata.map(recipe => {
        return (
        <div key={recipe.name}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
          ))}
        </div>
        )
      })}
    </div>
  )
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
