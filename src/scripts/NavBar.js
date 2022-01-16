import MobileMenu from './MobileMenu';

const MIN_SCROLL_DETECTION = 100; // px
const TIMEOUT = 3000;

class NavBar {
  constructor() {
    this.navbar = document.querySelector('#nav-wrap');
    this.lastScrollPosition = document.body.scrollHeight;
    this.delta = 0;
    setTimeout(this.init(), TIMEOUT);
  }

  init() {
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > this.lastScrollPosition) {
        if (this.delta < 0) this.delta = 0;
        this.delta += currentScrollPos - this.lastScrollPosition;
      } else {
        if (this.delta > 0) this.delta = 0;
        this.delta -= this.lastScrollPosition - currentScrollPos;
      }

      // hide navbar
      if (this.delta > MIN_SCROLL_DETECTION) {
        MobileMenu.hide();
        this.navbar.classList.remove('show');
        this.delta = 0;
      }

      // show navbar
      if (this.delta < -MIN_SCROLL_DETECTION) {
        this.navbar.classList.add('show');
        this.delta = 0;
      }

      this.lastScrollPosition = currentScrollPos;
    });
  }
}

export default new NavBar();
