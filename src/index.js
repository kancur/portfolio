import smoothscroll from 'smoothscroll-polyfill';
import './styles/main.scss';
import initSmoothScroll from './smoothscroll';
import setFirstSectionHeight from './firstSectionHeightHandler';
import Swiper, { Keyboard, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import randomizeBattleships from './battleships';
import randomizeTreeSway from './trees';
import randomizeSmoke from './smoke';
import setCurrentYear from './currentYear';
import AOS from 'aos';
import 'aos/dist/aos.css';
import setTimelineHeight from './timeline';
import slideSwipers from './slideSwipers';
import setAosDelays from './aosDelays';
Swiper.use([Navigation, Keyboard]);

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  //grabCursor: true,
  initialSlide: 1,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

smoothscroll.polyfill();

document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    offset: 60,
    once: true,
  });
  setTimeout(() => {
    AOS.refresh();
  }, 300);

  setTimeout(() => {
    slideSwipers(1)
  },500)  


  /* const swiper = document.querySelector('.swiper').swiper;
  swiper.slideTo(1); */
  setFirstSectionHeight();
  initSmoothScroll();

  setAosDelays();
  setCurrentYear();
  randomizeBattleships();
  randomizeTreeSway();
  randomizeSmoke();

  setTimeout(() => {
    setTimelineHeight();
  }, 500);

  let windowWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    // only fire if the width has changed -- dont resize on mobile address bar hide/show
    if (window.innerWidth === windowWidth) return;
    windowWidth = window.innerWidth;
    setFirstSectionHeight(window.innerHeight);
    setTimelineHeight();
  });

  const hamburger = document.querySelector('#hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => toggleMenu());

  nav.addEventListener('click', () => toggleMenu());

  const toggleMenu = () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('show-mobile-menu');
  };
});
