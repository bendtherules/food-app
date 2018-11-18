import React, { Component } from 'react';

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
        <div className="recipe-card" >
            <div className="recipe-card-top">
                <img className="recipe-card-image" src={props.data.image} alt={props.data.name} />
            </div>
            <div className="recipe-card-bottom">
                <div className="recipe-card-desc">
                    <div className="recipe-card-logo-wrapper">
                        <img className="recipe-card-logo" src={props.data.icon} alt={props.data.name} />
                    </div>
                    <div className="recipe-card-title-container">
                        <div className="recipe-card-title">
                            {
                                toTitleCase(props.data.name)
                            }
                        </div>
                        <div className="recipe-card-rating">
                            {
                                new Array(props.data.rating).map(_useless => (
                                    <div className="recipe-card-star">
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="recipe-card-price">
                        <div className="recipe-card-price-number">

                            {
                                `$${props.data.price}`
                            }
                        </div>
                        <div className="recipe-card-price-suffix">
                            Min Order
                        </div>
                    </div>
                </div>
                <div className="recipe-card-tags">
                    {
                        props.data.tags.map(tag => (
                            <div className="recipe-card-tag">
                                {
                                    toTitleCase(tag)
                                }
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}