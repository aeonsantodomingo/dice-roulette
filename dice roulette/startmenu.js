'strict';

const startPage = document.querySelector('.start--page');
const closeStart = document.querySelector('.btn--hide');

closeStart.addEventListener('click', function () {
  startPage.classList.add('hide');
});
