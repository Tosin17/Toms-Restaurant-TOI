// Global app controller
// Where webpack starts looking my files
import Meals from './models/Meals';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/findMeals';
import l from './console';

// For state management
const state = {};

const controlSearch = async () => {
    // Display loader
    renderLoader(elements.searchListParent);

    // Get query from view
    const query = searchView.getInput();
    searchView.clearInput();
    searchView.clearList();

    state.meals = new Meals(query);
    await state.meals.getResults();
    //l(query, state.meals.recipes);
    
    clearLoader();
    searchView.renderResults(state.meals.recipes);
}

elements.searchButton
.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
});

//Event delegation --
elements.paginationButtonsHolder
.addEventListener('click', e => {
   const btn = e.target.closest('.btn-inline');
   let page = parseInt(btn.dataset.nav);
   searchView.clearList();
   searchView.renderResults(state.meals.recipes, page); 
});




