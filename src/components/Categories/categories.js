import CategoryCard from '../CategoryCard';

import './categories.css';

function Categories(props) {
    return (
        `
        <div class="categories-wrapper">
            <div class="categories-inner">
            ${
                props.categories.map((category) => (
                    CategoryCard({
                        category,
                    })
                )).join('')
            }
            </div>
        </div>
        `
    )
}

export default (Categories);