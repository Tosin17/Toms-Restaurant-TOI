import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearList = () => {
    elements.searchListHolder.innerHTML = '';
}

export const limitWords = (title, limit = 17) => {
    let newTitle = [];
    if (title.length > limit) {
        const arry = title.split(' ');
        arry.reduce((acc, cur) => {
            if (acc + cur.length < limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')}...`
    }
    return title;
}

const renderRecipe = (recipe) => {
    const markUp = `<li>
                        <a class="results__link results__link--active" href="${recipe.recipe_id}">
                            <figure class="results__fig">
                                <img src="${recipe.image_url}" alt="Test">
                            </figure>
                            <div class="results__data">
                                <h4 class="results__name">${limitWords(recipe.title)}</h4>
                                <p class="results__author">${recipe.publisher}</p>
                            </div>
                        </a>
                    </li>`;

    elements.searchListHolder
    .insertAdjacentHTML('beforeend', markUp);                
}