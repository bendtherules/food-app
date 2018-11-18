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
        <div class="category-card" >
            <div class="category-card-left">
                <img class="category-card-image" src=${props.category.image} alt=${props.category.name} />
            </div>
            <div class="category-card-right">
                <div class="category-card-title">
                    ${
                        toTitleCase(props.category.name)
                    }
                </div>
                <div class="category-card-subtitle">
                    ${
                        `${props.category.restaurants} Resturants`
                    }
                </div>
            </div>
        </div>
        `
    )
}
