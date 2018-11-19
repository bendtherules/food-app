import './searchbox.css';

function debounce(func, timeOut) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = undefined;
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, timeOut);

        var callNow = (timeout === undefined);
        if (callNow) func.apply(context, args);
    };
};

export default function SearchBox(props) {
    setTimeout(function () {
        const recipesData = props.recipes;

        const searchInput = document.getElementById("search-input");
        const recipesWrapper = document.getElementById("recipes-wrapper");
        const allRecipeCards = [...document.getElementsByClassName("recipe-card")];

        let lastFilteredRecipeCards = [...allRecipeCards];

        function inputEventHandler(ev) {
            ev.preventDefault();

            const searchValue = searchInput.value.toLowerCase();

            const filteredRecipeIndexes = recipesData.map((recipe, index) => {
                const recipeName = recipe.name.toLowerCase();
                if (recipeName.indexOf(searchValue) > -1) {
                    return index;
                }
                return undefined;
            }).filter((value) => value !== undefined);

            const filteredRecipeCards = filteredRecipeIndexes.map((recipeIndex) => {
                return allRecipeCards[recipeIndex];
            });

            lastFilteredRecipeCards.forEach(recipeCard => {
                recipesWrapper.removeChild(recipeCard);
            });

            filteredRecipeCards.forEach(recipeCard => {
                recipesWrapper.appendChild(recipeCard);
            });

            lastFilteredRecipeCards = filteredRecipeCards;
        }

        searchInput.addEventListener('input', debounce(inputEventHandler, 500));
    },
        100
    );

    return (
        `
        <div class="search-box">
            <span class="search-box-icon mdi mdi-magnify">
            </span>
            <input type="search" id="search-input">
        </div>
        `
    );
}
