const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const slider = document.querySelector('.slide');

next.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    slider.appendChild(items[0]);
});

prev.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    slider.insertBefore(items[items.length - 1], items[0]);
});
