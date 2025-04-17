let prevScrollPos = window.pageYOffset;
const menu = document.querySelector('.navigation-buttons');

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
};
