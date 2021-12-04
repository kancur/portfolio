export default function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"][data-nav]').forEach((element) => {
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
};
