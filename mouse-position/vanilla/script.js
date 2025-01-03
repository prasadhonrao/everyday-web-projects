const xPosition = document.getElementById('x-position');
const yPosition = document.getElementById('y-position');

window.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  xPosition.textContent = x;
  yPosition.textContent = y;
});

window.onload = () => {
  xPosition.textContent = 0;
  yPosition.textContent = 0;
};
