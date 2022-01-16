import MobileMenu from "./MobileMenu";

export default function attachLightBoxListeners() {
  const lightBox = new Lightbox();
  const images = document.querySelectorAll('.swiper-slide > img');

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
      lightBox.show(images[i].src);
    });
  }
}

class Lightbox {
  constructor() {
    this.lightbox = document.querySelector('.lightbox');
    this.lightboxImage = document.querySelector('.lightbox-image');

    this.lightbox.addEventListener('click', () => {
        this.hide();
    });
  }

  

  hide() {
    this.lightbox.classList.remove('show');
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    MobileMenu.unfreeze()

  }

  show(src) {
    MobileMenu.freeze()
    this.lightboxImage.src = src;
    this.lightbox.classList.add('show');
    
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
  }
}