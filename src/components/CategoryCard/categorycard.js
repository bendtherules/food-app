import './categorycard.css';

function toTitleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}

export default function CategoryCard(props) {
    return (
        `
        <div className="category-card" >
            <div className="category-card-left">
                <img className="category-card-image" src=${props.category.image} alt=${props.category.name} />
            </div>
            <div className="category-card-right">
                <div className="category-card-title">
                    ${
                        toTitleCase(props.category.name)
                    }
                </div>
                <div className="category-card-subtitle">
                    ${
                        `${props.category.restaurants} Resturants`
                    }
                </div>
            </div>
        </div>
        `
    )
}
