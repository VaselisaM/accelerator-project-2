import { HEROSLIDES } from '../data';
import Swiper from 'swiper';
// import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const heroSlider = document.querySelector('.hero-slider__slides');

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

const getHeroSlide = (slide) => {
  const heroSlide = makeElement('li', 'hero-slider__slide');
  heroSlide.classList.add('swiper-slide');
  heroSlider.appendChild(heroSlide);
  heroSlide.style.backgroundImage = `linear-gradient(143deg, rgba(15,20,41,0.33) 0%, rgba(15,20,41,0) 100%),
    image-set(url("../../img/${slide.image}@2x.webp") type("image/webp") 2x,
    url("../../img/${slide.image}@1x.webp") type("image/webp") 1x)`;

  let slideContainer = '';

  slideContainer += `
    <div class="hero-slider__container container">
      <h3>${slide.title}</h3>
      <p>${slide.description}</p>
      <a class="hero-slider__button button link" href="${slide.link}">Смотреть тур</a>
      <div class="hero-slider__details">
        <span class="hero-slider__detail hero-slider__detail--duration"><span class="visually-hidden">Продолжительность тура: </span>${slide.duration}</span>
        <span class="hero-slider__detail hero-slider__detail--level"><span class="visually-hidden">Уровень сложности маршрута: </span>${slide.level}</span>
      </div>
    </div>
  `;

  heroSlide.insertAdjacentHTML('afterbegin', slideContainer);

  return heroSlide;
};


for (let i = 0; i < HEROSLIDES.length; i++) {
  const heroSlide = getHeroSlide(HEROSLIDES[i]);
  heroSlider.appendChild(heroSlide);
}

const swiper = new Swiper('.swiper1', {
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

swiper.slideNext();


// const heroSlideContainer = makeElement('div', 'hero-slider__container');
// heroSlide.appendChild(heroSlideContainer);
// heroSlideContainer.classList.add('container');
// const title = makeElement('h3', '', slide.title);
// const description = makeElement('p', '', slide.description);
// const button = makeElement('a', 'hero-slider__button', 'Смотреть тур');
// button.classList.add('button');
// button.classList.add('link');
// heroSlideContainer.appendChild(title);
// heroSlideContainer.appendChild(description);
// heroSlideContainer.appendChild(button);

// const heroSlideDetails = makeElement('div', 'hero-slider__details');
// const heroSlideDuration = makeElement('span', 'hero-slider__detail--duration', slide.duration);
// heroSlideDuration.classList.add('hero-slider__detail');
// const heroSlideDurationSpan = makeElement('span', 'visually-hidden', 'Продолжительность тура: ');
// const heroSlideLevel = makeElement('span', 'hero-slider__detail--level', slide.level);
// heroSlideLevel.classList.add('hero-slider__detail');
// const heroSlideLevelSpan = makeElement('span', 'visually-hidden', 'Уровень сложности маршрута: ');
// heroSlideContainer.appendChild(heroSlideDetails);
// heroSlideDetails.appendChild(heroSlideDuration);
// heroSlideDuration.appendChild(heroSlideDurationSpan);
// heroSlideDetails.appendChild(heroSlideLevel);
// heroSlideLevel.appendChild(heroSlideLevelSpan);

