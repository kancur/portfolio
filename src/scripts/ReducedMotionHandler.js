
class ReducedMotionHandler {
  constructor(){
    this.callbacks = [];
    this.mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.isReducedMotion = this.mediaQuery.matches;
    this.init()
  }

  registerCallback(callback) {
    this.callbacks.push(callback);
  }

  init() {
    this.mediaQuery.addEventListener('change', () => {
      this.isReducedMotion = this.mediaQuery.matches;
      
      if (this.callbacks.length > 0) {
        this.callbacks.forEach(callback => callback());
      }

    });
  }
}

export default new ReducedMotionHandler();