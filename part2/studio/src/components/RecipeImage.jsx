import recipedata from "./recipe.json";

function RecipeImage() {
  return recipedata.map((image) => (
    <div key={image.name}>
      <img src={image.recipeImage} alt={image.name} className="recipeImage"></img>
    </div>
  ));
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
