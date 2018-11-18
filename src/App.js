import Header from './components/Header/header';
import Categories from './components/Categories';
import Recipes from './components/Recipes';


import './App.css';

class App {
  static recipeURL = './recipes.json';

  constructor() {
    this.data = undefined;
    this.renderPromise = undefined;

    this.renderPromise = (
      this
      .initialize()
      .then(
        () => this.render()
      )
    );
  }

  initialize() {

    return fetch(App.recipeURL)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        this.data = dataJSON;
      });
  }

  render() {
    return (
      `
      <div class="App">
        ${
          Header()
        }
        ${
          Categories({
            categories: this.data.categories,
          })
        }
        ${
          Recipes({
            recipes: this.data.recipes,
          })
        }
      </div>
      `
    );
  }
}

export default (App);
