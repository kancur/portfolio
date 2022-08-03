import ReducedMotionHandler from "./ReducedMotionHandler";

ReducedMotionHandler.registerCallback(() => {
  randomizeBattleships(true)
})

export default function randomizeBattleships(reducedMotion = ReducedMotionHandler.isReducedMotion) {  
  const minDuration = reducedMotion ? 30000 : 80
  const maxDuration = reducedMotion ? 30000: 300
  const battleships = document.querySelectorAll('.battleship');

  for (let i = 0; i < battleships.length; i++) {
    const animationDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1) + minDuration);
    const randomDuration = Math.floor(Math.random() * animationDuration);
    battleships[i].style.animationDuration = `${animationDuration}s`;
    battleships[i].style.animationDelay = -randomDuration + 's';
  }
}
