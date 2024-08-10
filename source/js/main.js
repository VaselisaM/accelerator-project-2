// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import {getTitleShadow} from './modules/title-shadow.js';
import './modules/hero-slider.js';
import './modules/tours-slider.js';
// import {getHeroSlider} from './modules/hero-slider.js';

const titles = document.querySelectorAll('.title');

getTitleShadow(titles);


const navMain = document.querySelector('.header__navigation-list');
const navButton = document.querySelector('.header__button');
const pageBody = document.querySelector('.page-body');

navButton.addEventListener('click', () => {
  if (navMain.classList.contains('header__navigation-list--closed')) {
    navMain.classList.remove('header__navigation-list--closed');
    navMain.classList.add('header__navigation-list--opened');
    navButton.classList.remove('header__button--closed');
    navButton.classList.add('header__button--opened');
    pageBody.classList.add('page-body--fixed');
  } else {
    navMain.classList.remove('header__navigation-list--opened');
    navMain.classList.add('header__navigation-list--closed');
    navButton.classList.remove('header__button--opened');
    navButton.classList.add('header__button--closed');
    pageBody.classList.remove('page-body--fixed');
  }
});

// getHeroSlider();
