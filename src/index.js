import smoothscroll from 'smoothscroll-polyfill';
import './styles/main.scss';
import initSmoothScroll from './scripts/smoothscroll';
import setFirstSectionHeight from './scripts/firstSectionHeightHandler';
import Swiper, { Keyboard, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
import randomizeBattleships from './scripts/battleships';
import randomizeTreeSway from './scripts/trees';
import randomizeSmoke from './scripts/smoke';
import setCurrentYear from './scripts/currentYear';
import AOS from 'aos';
import 'aos/dist/aos.css';
import setTimelineHeight from './scripts/timeline';
import slideSwipers from './scripts/slideSwipers';
import setAosDelays from './scripts/aosDelays';
import addRandomIconsToolsy from './scripts/toolsy';
import attachLightBoxListeners from './scripts/lightbox';
import MobileMenu from './scripts/MobileMenu';
import NavBar from './scripts/NavBar';

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
  addRandomIconsToolsy();

  attachLightBoxListeners();


  setTimeout(() => {
    setTimelineHeight();
  }, 500);

  let windowWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    // only fire if the width has changed -- dont resize on mobile address bar hide/show
    MobileMenu.hide();
    if (window.innerWidth === windowWidth) return;
    windowWidth = window.innerWidth;
    setFirstSectionHeight(window.innerHeight);
    setTimelineHeight();
  });

});
