import MobileMenu from './MobileMenu';
import ReducedMotionHandler from './ReducedMotionHandler';

const MIN_SCROLL_DETECTION = 100; // px
const TIMEOUT = 3000;

class NavBar {
  constructor() {
    this.isFrozen = false;
    this.navbar = document.querySelector('#nav-wrap');
    this.lastScrollPosition = document.body.scrollHeight;
    this.delta = 0;
    setTimeout(this.init(), TIMEOUT);
    ReducedMotionHandler.registerCallback(() => {
      this.navbar.classList.add('show');
    })
  }

  init() {
    window.addEventListener('scroll', () => {
      if (this.isFrozen) return;
      if (ReducedMotionHandler.isReducedMotion) return;
      
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

  freeze() {
    this.isFrozen = true;
  }

  unfreeze() {
    this.isFrozen = false;
  }
}

export default new NavBar();
