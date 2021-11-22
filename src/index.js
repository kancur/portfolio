import smoothscroll from 'smoothscroll-polyfill';
import './styles/main.scss';

smoothscroll.polyfill();

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav a[href^="#"]').forEach((element) => {
    element.onclick = function (e) {
      e.preventDefault();
      let hash = this.getAttribute('href');
      let target = document.querySelector(hash);
      let elementPosition = target.offsetTop;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    };
  });
});
