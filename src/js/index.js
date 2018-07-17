// Global app controller
// Where webpack starts looking my files
import Meals from './models/Meals';
import { elements, renderLoader, clearLoader } from './views/base';
import * as serchView from './views/findMeals';
import l from './console';

// For state management
const state = {};

const controlSearch = async () => {
    // Display loader
    renderLoader(elements.searchListParent);

    // Get query from view
    const query = serchView.getInput();
    serchView.clearInput();
    serchView.clearList();

    state.meals = new Meals(query);
    await state.meals.getResults();
    //l(query, state.meals.recipes);
    
    clearLoader();
    serchView.renderResults(state.meals.recipes);
}

elements.searchButton
.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
});

l(serchView.limitWords('PASTA IS VERY VERY GOOD FOR YOU'))


