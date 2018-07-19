import { elements } from './base';
import l from '../console';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearList = () => {
    elements.searchListHolder.innerHTML = '';
    elements.paginationButtonsHolder.innerHTML = '';
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
                        <a class="results__link" href="${recipe.recipe_id}">
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

const createButton = (page, type) => `
                <button class="btn-inline results__btn--${type}" data-nav="${type === 'prev' ? page - 1 : page + 1}">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
                    </svg>
                    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
                </button>`

const renderButtons = (page, nResults, resultsPerPage) => {
    const pages = Math.ceil(nResults / resultsPerPage);

    // Primitive handling for only 3 pages
    let button;
    if (page === 1 && pages > 1) {
        button = createButton(page, 'next');
    } else if (page < pages) {
        button = `${createButton(page, 'prev')} ${createButton(page, 'next')}`
    } else if (page === pages && pages > 1) {
        button = createButton(page, 'prev');
    }

    elements.paginationButtonsHolder
    .insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (recipes, page = 1, resultsPerPage = 10) => {
    const start = (page - 1) * resultsPerPage; 
    const end = page * resultsPerPage;
    
    recipes.slice(start, end)
    .forEach(renderRecipe);

    renderButtons(page, recipes.length, resultsPerPage);
}