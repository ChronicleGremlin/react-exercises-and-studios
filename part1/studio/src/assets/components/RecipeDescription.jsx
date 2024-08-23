import React from 'react';
import RecipeAuthor from './Description';

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>My Favorite Banana Bread Recipe</h1>
                    <p>This is a recipe for super-moist and buttery, delicious banana bread</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    };
};

export default RecipeDescription;