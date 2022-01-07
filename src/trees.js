/**
 * Adds random delay to the tree sway animation on each tree
 */
export default function randomizeTreeSway() {
  const trees = document.querySelectorAll('.tree');

  for (let i = 0; i < trees.length; i++) {
    const randomDelay = Math.floor(Math.random() * 1400);
    trees[i].style.animationDelay = `${-randomDelay}ms`;  
  }
}
