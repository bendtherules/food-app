import RecipeCard from '../RecipeCard';

import './recipes.css';

function Recipes(props) {
    return (
        `
        <div class="recipes-wrapper">
            ${
                props.recipes.map((recipe) => (
                    RecipeCard({
                        recipe,
                    })
                )).join('')
            }
        </div>
        `
    );
}

export default (Recipes);