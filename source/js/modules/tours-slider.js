import { TOURSLIDES } from '../data';
import Swiper from 'swiper';
// import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const tourSlider = document.querySelector('.tours-slider__slides');

const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);

  if (className) {
    element.classList.add(className);
  }

  if (text) {
    element.textContent = text;
  }

  return element;
};

const getTourSlide = (slide) => {
  const tourSlide = makeElement('li', 'tours-slider__slide');
  tourSlide.classList.add('swiper-slide');
  tourSlider.appendChild(tourSlide);
  tourSlide.style.backgroundImage = `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 62%, rgba(0,0,0,0) 100%),
    image-set(url("../../img/${slide.image}@2x.webp") type("image/webp") 2x,
    url("../../img/${slide.image}@1x.webp") type("image/webp") 1x)`;

  let slideContainer = '';

  slideContainer += `
      <div class="tours-slider__container">
        <span class="tours-slider__place"><span class="visually-hidden">Место проведения тура: </span>${slide.place}</span>
      <div class="tours-slider__duration-info">
        <span class="visually-hidden">Продолжительность тура: </span>
        <span class="tours-slider__duration tours-slider__duration--days">${slide.days}</span>
        <span class="tours-slider__duration tours-slider__duration--night">${slide.nights}</span>
      </div>
      <h3 class="tours-slider__title">${slide.title}</h3>
      <div class="tours-slider__details">
        <p class="tours-slider__detail tours-slider__detail--level">Сложность: <span class="visually-hidden">Высокая сложность</span></p>
        <p class="tours-slider__detail tours-slider__detail--date">Даты набора: <span><time datetime="2024-06-12">12.06</time>–<time datetime="2024-06-19">19.06</time></span></p>
        <p class="tours-slider__detail tours-slider__detail--group">Группа: <span>${slide.group}</span></p>
      </div>
    </div>
  `;

  tourSlide.insertAdjacentHTML('afterbegin', slideContainer);

  return tourSlide;
};


for (let i = 0; i < TOURSLIDES.length; i++) {
  const heroSlide = getTourSlide(TOURSLIDES[i]);
  tourSlider.appendChild(heroSlide);
}

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiper2.slideNext();
