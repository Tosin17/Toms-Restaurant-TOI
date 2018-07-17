export const elements = {
    searchInput: document.querySelector('.search__field'),
    searchButton: document.querySelector('.search'),
    searchListHolder: document.querySelector('.results__list'),
    searchListParent: document.querySelector('.results'),
}

export const renderLoader = parent => {
    const loader = `<div class="loader">
                        <svg>
                            <use href="img/icons.svg#icon-cw"></use>
                        </svg> 
                    </div>`;

    parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
    var loader = document.querySelector('.loader');
    if (loader) {
        loader.parentElement.removeChild(loader);
    }
}