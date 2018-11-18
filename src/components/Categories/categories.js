import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryCard from '../CategoryCard';

import './categories.css';

function Categories(props) {
    return (
        <div className="categories-wrapper">
            <div className="categories-inner">
            {
                props.categories.map((category) => (
                    <CategoryCard data={category} />
                ))
            }
            </div>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        categories: state.data.categories || [],
    }
}
export default connect(mapStateToProps)(Categories);