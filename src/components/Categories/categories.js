import CategoryCard from '../CategoryCard';

import './categories.css';

function Categories(props) {
    return (
        `
        <div class="swipable-outer">
            <div class="swipable-inner">
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