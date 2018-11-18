import React, { Component } from 'react';
import { connect } from 'react-redux';

import RecipeCard from '../RecipeCard';

import './recipes.css';

function Recipes(props) {
    return (
        <div className="recipes-wrapper">
            {
                props.recipes.map((recipe) => (
                    <RecipeCard data={recipe} />
                ))
            }
        </div>
    )
}


function mapStateToProps(state) {
    return {
        recipes: state.data.recipes || [],
    }
}
export default connect(mapStateToProps)(Recipes);