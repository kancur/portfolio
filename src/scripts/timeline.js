/**
 * Calculates and sets the bottom offset of the timeline line
 */
export default function setTimelineHeight() {
  const timeline = document.querySelector('.timeline-line');
  const lastContainer = document.querySelector('.container:last-child');

  const lastContainerOffset = lastContainer.offsetTop;
  const parentHeight = lastContainer.parentElement.offsetHeight;

  const offsetFromBottom = parentHeight - lastContainerOffset - 35;
  timeline.style.bottom = offsetFromBottom + 'px';
}