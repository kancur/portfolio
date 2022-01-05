export default function randomizeBattleships() {
  const battleships = document.querySelectorAll('.battleship');
  const maxDuration = 300;
  const minDuration = 80;


  for (let i = 0; i < battleships.length; i++) {
    const animationDuration = Math.floor(Math.random() * (maxDuration - minDuration + 1) + minDuration);
    const randomDuration = Math.floor(Math.random() * animationDuration);
    battleships[i].style.animationDuration = `${animationDuration}s`;
    battleships[i].style.animationDelay = -randomDuration + 's';  
  }
}
