import { useState } from 'react';
import './App.css';
import RecipeDescription from './assets/components/RecipeDescription';
import RecipeIngredients from './assets/components/Ingredients';
// import RecipePhoto from './assets/components/Photos';

function App() {

  return (
    <>
      <div className="App">
      {/* <RecipePhoto /> */}
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </>
  )
}

export default App;
