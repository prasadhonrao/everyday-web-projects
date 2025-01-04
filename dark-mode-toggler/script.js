const toggler = document.getElementById('dark-mode-toggler');
const body = document.body;

toggler.addEventListener('change', updateBody);

if (localStorage.getItem('mode') === 'true') {
  toggler.checked = true;
}

updateBody();

function updateBody() {
  if (toggler.checked) {
    body.style.backgroundColor = '#333';
  } else {
    body.style.backgroundColor = '#fff';
  }
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem('mode', toggler.checked);
}
