import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {bakedGoods : "Baking Bread", grilledFood : "Lord of The Grill", smoothies : "SuperNatural Smoothies"}];

   const handleChange = (event) => {
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         <option value={boards.bakedGoods}>{bakedGoods}</option>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
