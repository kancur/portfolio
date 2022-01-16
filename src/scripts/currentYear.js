export default function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  const currentYearElement = document.querySelector('.current-year');
  currentYearElement.innerHTML = currentYear;
}