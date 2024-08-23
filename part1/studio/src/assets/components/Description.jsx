import React from 'react';
import styles from './Description.module.css';

class RecipeAuthor extends React.Component {
    render() {
        let authorLink = 'https://sallysbakingaddiction.com/best-banana-bread-recipe/#tasty-recipes-66473';
        let authorPhoto = 'https://sallysbakingaddiction.com/wp-content/uploads/2023/08/headshot-sally-green-shirt-300x300.jpg';
        let authorName = 'Sally McKenney';

        return (
            <div className={styles.recipeAuthorBlock}>
                <img src={authorPhoto} alt="Sally McKenney" className={styles.imageUpdates}></img>
                <div>
                    <h3>{authorName}</h3>
                    <a href={authorLink}>Sally's Baking Recipe</a>
                </div>
            </div>
        );
    };
};

export default RecipeAuthor;
