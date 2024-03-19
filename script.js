const slider = document.querySelector('.swiper');

let swiper;

function handleScreenSizeChange(media) {
  if (media.matches) {
    swiper && swiper.destroy();
    slider.style.display = 'none';
  } else {
    swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: -20,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    });
    slider.style.display = 'block';
  }
};

if (!window.matchMedia('(min-width: 550px)').matches) {
  handleScreenSizeChange({matches: false});
};

window.addEventListener('resize', () => {
  const mediaQuery = window.matchMedia('(min-width: 550px)');
  handleScreenSizeChange(mediaQuery);
});
 
let button = document.querySelector('.container__show-button');
let cards = document.querySelectorAll('.container__slide');
let currentCard = cards[1];
let currentCardTwo = cards[3];

const onToggle = (element, className, button, btnClass, modification) => {
  const classes = element.classList;
  const isClass = Array.from(classes).includes(className);
  if (isClass) {
    element.classList.remove(className);
    button.textContent = 'Скрыть';
    button.classList.remove(btnClass);
    button.classList.add(modification);
  } else {
    element.classList.add(className);
    button.textContent = 'Показать все';
    button.classList.remove(modification);
    button.classList.add(btnClass);
  }
};

button.addEventListener('click', () => {
  if (window.matchMedia('(min-width: 1120px)').matches) {
    onToggle(currentCardTwo, 'none', button, 'container__show-button', 'container__show-button--active');
  } else {
    onToggle(currentCard, 'none', button, 'container__show-button', 'container__show-button--active');
  }
});

