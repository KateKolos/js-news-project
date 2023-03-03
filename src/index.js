import createRenderCategoriesMarkup from './js/createRenderCategories';
import showHideOthersCategories from './js/showHideOthersCategories';
import getCategoriesValue from './js/getCategoriesValue';

import { getDataMostPopularNews } from './js/fetchData/fetchMostPopularNews';
import { createCardsMarkup } from './js/createCardsMarkup';
import { addMarkup } from './js/addMarkup';
import { refs } from './js/header/refs';
import { onBurgerBtnClick } from './js/header/mobileBurger';
import { onSearchIconClick } from './js/header/searchInput';

const categoriesEl = document.querySelector('.filter-wrapper');

createRenderCategoriesMarkup();

// -> Show - Hide others categories on 'Others' button click
categoriesEl.addEventListener('click', showHideOthersCategories);
// -> Get category value after click
categoriesEl.addEventListener('click', event => {
  const categorySelected = getCategoriesValue(event);
  console.log(categorySelected);
});

// =================News render==============

const card__containerEl = document.querySelector('.card-container');

getDataMostPopularNews()
  .then(({ results }) => {
    console.log(results);
    const markup = createCardsMarkup(results);
    addMarkup(card__containerEl, markup);
  })
  .catch(error => {
    console.log(error.message);
  });

// -> open burger menu
refs.headerBurger.addEventListener('click', onBurgerBtnClick);
refs.searchIcon.addEventListener('click', onSearchIconClick);
