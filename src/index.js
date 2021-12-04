import smoothscroll from 'smoothscroll-polyfill';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/main.scss';
import initSmoothScroll from './smoothscroll';
import setFirstSectionHeight from './firstSectionHeightHandler';

AOS.init({
  offset: 60,
});
smoothscroll.polyfill();

document.addEventListener('DOMContentLoaded', function () {
  setFirstSectionHeight();
  initSmoothScroll();

  let windowWidth = window.innerWidth;

  window.addEventListener('resize', () => {
    // only fire if the width has changed -- dont resize on mobile address bar hide/show
    if (window.innerWidth === windowWidth) return;
    windowWidth = window.innerWidth;
    setFirstSectionHeight(window.innerHeight);
  });

  const hamburger = document.querySelector('#hamburger');
  const nav = document.querySelector('nav');

  hamburger.addEventListener('click', () => toggleMenu())

  nav.addEventListener('click', () => toggleMenu())

  const toggleMenu = () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('show-mobile-menu');
  };
});
