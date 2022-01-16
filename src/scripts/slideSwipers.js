// a workaround function for the non functioning swiper "initialSlide" option
export default function slideSwipers(index){
  const swippableElements = document.getElementsByClassName('swiper');
  for (let swip of swippableElements) {
    const swiper = swip.swiper;
    swiper.slideTo(index, 0, false);
  }
}
