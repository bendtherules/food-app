import CategoryCard from '../CategoryCard';

import './categories.css';

function Categories(props) {
    return (
        `
        <div className="categories-wrapper">
            <div className="categories-inner">
            ${
                props.categories.map((category) => (
                    CategoryCard({
                        category,
                    })
                ))
            }
            </div>
        </div>
        `
    )
}

export default (Categories);