const container = document.querySelector('.container');
const button = document.querySelector('button');

// Load 5 more images on button click and add it to the container
button.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    const img = document.createElement('img');
    img.classList.add('image');
    img.src = `https://picsum.photos/300?${Math.floor(Math.random() * 1000)}`;
    container.appendChild(img);
  }
});
