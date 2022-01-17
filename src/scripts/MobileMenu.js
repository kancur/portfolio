class MobileMenu {
  constructor() {
    this.hamburger = document.querySelector('#hamburger');
    this.nav = document.querySelector('nav');
    this.init();
  }

  init() {
    this.hamburger.addEventListener('click', () => this.toggle());
    this.nav.addEventListener('click', () => this.hide());
  }

  toggle = () => {
    this.hamburger.classList.toggle('is-active');
    this.nav.classList.toggle('show-mobile-menu');
  };

  hide() {
    this.hamburger.classList.remove('is-active');
    this.nav.classList.remove('show-mobile-menu');
  }

  show() {
    this.hamburger.classList.add('is-active');
    this.nav.classList.add('show-mobile-menu');
  }
}

export default new MobileMenu()