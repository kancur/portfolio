export default function randomizeSmoke() {
  const smokes = document.querySelectorAll('.smoke');
  const maxDuration = 12;
  const minDuration = 8;

  for (let i = 0; i < smokes.length; i++) {
    const animationDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1) + minDuration);
    
    smokes[i].style.animationDuration = animationDuration
    smokes[i].style.animationDelay = `${(-maxDuration/smokes.length) * i}s`;  
  }
}
