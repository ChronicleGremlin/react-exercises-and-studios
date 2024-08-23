import styles from './Description.module.css';

class RecipePhoto extends React.Component {
    render() {

        return (
            <div className={styles.recipeAuthorBlock}>
                <img src={'https://sallysbakingaddiction.com/wp-content/uploads/2013/05/banana-bread-recipe-4.jpg'} alt="recipe photo" className={styles.imageUpdates}></img>
            </div>
        );
    };
};

export default RecipePhoto;