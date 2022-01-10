const NUMBER_OF_ICONS = 100;

export default function addRandomIconsToolsy() {
  const wrapper = document.querySelector('#toolsy');

  for (let i = 0; i < NUMBER_OF_ICONS; i++) {
    const icon = document.createElement('img');
    icon.src = '/toolsy-icon.png';
    icon.classList.add('decoration', 'toolsy-icon');

    icon.style.width = `${randomInt(10, 100)}px`;
    icon.style.top = randomInt(0, 92) + '%';
    icon.style.left = randomInt(-5,100) + '%';
    icon.style.transform = `rotate(${randomInt(-360,360)}deg)`;
    wrapper.appendChild(icon);
  }
  

}

function randomInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomFloat(min, max) { 
  return Math.random() * (max - min) + min
}