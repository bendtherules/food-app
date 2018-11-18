import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/header';
import Categories from './components/Categories';
import Recipes from './components/Recipes';

import { initAction } from './actions/initAction';

import './App.css';

class App extends Component {
  static recipeURL = './recipes.json';

  initAction = (data) => {
    this.props.initAction(data);
  }

  componentDidMount() {
    const initAction = this.initAction;

    fetch(App.recipeURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (dataJSON) {
        initAction(dataJSON);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Categories />
        <Recipes />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data,
});
const mapDispatchToProps = dispatch => ({
  initAction: (data) => dispatch(initAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
