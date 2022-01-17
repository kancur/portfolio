const INITIAL_DELAY = 0;
const DIFFERENCE = 150;

export default function setAosDelays(){
  const techStacks = document.querySelectorAll('.techstack');

  for (let stack of techStacks) {
    const ul = stack.querySelector('ul');
    const listItems = ul.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
      const delay = INITIAL_DELAY + i * DIFFERENCE;
      listItems[i].setAttribute('data-aos-delay', delay);
    }
  }
}