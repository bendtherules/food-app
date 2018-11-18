import RecipeCard from '../RecipeCard';

import './recipes.css';

function Recipes(props) {
    return (
        `
        <div className="recipes-wrapper">
            ${
                props.recipes.map((recipe) => (
                    RecipeCard({
                        recipe,
                    })
                ))
            }
        </div>
        `
    );
}

export default (Recipes);