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
        <div className="recipe-card" >
            <div className="recipe-card-top">
                <img className="recipe-card-image" src=${props.recipe.image} alt=${props.recipe.name} />
            </div>
            <div className="recipe-card-bottom">
                <div className="recipe-card-desc">
                    <div className="recipe-card-logo-wrapper">
                        <img className="recipe-card-logo" src=${props.recipe.icon} alt=${props.recipe.name} />
                    </div>
                    <div className="recipe-card-title-container">
                        <div className="recipe-card-title">
                            ${
                                toTitleCase(props.recipe.name)
                            }
                        </div>
                        <div className="recipe-card-rating">
                            ${
                                new Array(props.recipe.rating).map(_useless => (
                                    `
                                    <div className="recipe-card-star">
                                    </div>
                                    `
                                ))
                            }
                        </div>
                    </div>
                    <div className="recipe-card-price">
                        <div className="recipe-card-price-number">
                            ${
                                `$${props.recipe.price}`
                            }
                        </div>
                        <div className="recipe-card-price-suffix">
                            Min Order
                        </div>
                    </div>
                </div>
                <div className="recipe-card-tags">
                    ${
                        props.recipe.tags.map(tag => (
                            `
                            <div className="recipe-card-tag">
                                ${
                                    toTitleCase(tag)
                                }
                            </div>
                            `
                        ))
                    }

                </div>
            </div>
        </div>
        `
    );
}