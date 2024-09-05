import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://sallysbakingaddiction.com/best-banana-bread-recipe/#tasty-recipes-66473";
   let authorPhoto = "https://sallysbakingaddiction.com/wp-content/uploads/2023/08/headshot-sally-green-shirt-300x300.jpg";
   let authorName = "Sally McKenney";

   return (
      <div>
         <img src={authorPhoto} alt = "Sally McKenney" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["2 cups (250g) all-purpose flour (spooned & leveled)",
       "1 teaspoon baking soda",
       "1/4 teaspoon salt",
       "1/2 teaspoon ground cinnamon",
       "1/2 cup (8 Tbsp; 113g) unsalted butter (softened to room temperature)",
       "3/4 cup (150g) packed light or dark brown sugar", 
       "2 large eggs, at room temperature",
       "2 cups (460g) mashed bananas (about 4 large ripe bananas)",
       "1 teaspoon pure vanilla extract", 
       "Optional: 3/4 cup (100g) chopped pecans or walnuts"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
            <li>{ingredients[6]}</li>
            <li>{ingredients[7]}</li>
            <li>{ingredients[8]}</li>
            <li>{ingredients[9]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Bannana Bread</h1>
            <p>This is a recipe for super-moist and buttery, delicious banana bread</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://sallysbakingaddiction.com/wp-content/uploads/2013/05/banana-bread-recipe-4.jpg" alt="Bannana Bread" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
