import './recipecard.css';

function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

export default function RecipeCard(props) {
    return (
        `
        <div class="recipe-card" >
            <div class="recipe-card-top">
                <img class="recipe-card-image" src=${props.recipe.image} alt=${props.recipe.name} />
            </div>
            <div class="recipe-card-bottom">
                <div class="recipe-card-desc">
                    <div class="recipe-card-logo-wrapper">
                        <img class="recipe-card-logo" src=${props.recipe.icon} alt=${props.recipe.name} />
                    </div>
                    <div class="recipe-card-title-container">
                        <div class="recipe-card-title">
                            ${
                                toTitleCase(props.recipe.name)
                            }
                        </div>
                        <div class="recipe-card-rating">
                            ${
                                new Array(props.recipe.rating).map(_useless => (
                                    `
                                    <div class="recipe-card-star">
                                    </div>
                                    `
                                )).join('')
                            }
                        </div>
                    </div>
                    <div class="recipe-card-price">
                        <div class="recipe-card-price-number">
                            ${
                                `$${props.recipe.price}`
                            }
                        </div>
                        <div class="recipe-card-price-suffix">
                            Min Order
                        </div>
                    </div>
                </div>
                <div class="recipe-card-tags">
                    ${
                        props.recipe.tags.map(tag => (
                            `
                            <div class="recipe-card-tag">
                                ${
                                    toTitleCase(tag)
                                }
                            </div>
                            `
                        )).join('')
                    }

                </div>
            </div>
        </div>
        `
    );
}