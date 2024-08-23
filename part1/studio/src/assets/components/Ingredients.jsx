import React from "react";
import styles from './Ingredients.module.css';

class RecipeIngredients extends React.Component {
    render() {
        let ingredients = ['2 cups (250g) all-purpose flour (spooned & leveled)', '1 teaspoon baking soda', '1/4 teaspoon salt', '1/2 teaspoon ground cinnamon', '1/2 cup (8 Tbsp; 113g) unsalted butter, softened to room temperature', '3/4 cup (150g) packed light or dark brown sugar', '2 large eggs, at room temperature', '2 cups (460g) mashed bananas (about 4 large ripe bananas)', '1 teaspoon pure vanilla extract', 'optional: 3/4 cup (100g) chopped pecans or walnuts'];
        return (
            <div>
                <h3>Recipe Ingredients</h3>
                <ul className={styles.ingredientList}>
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
        )
    };
};

export default RecipeIngredients;