
const isItOpenOrClose = document.querySelector('nav')

function openMenu() {
  isItOpenOrClose.classList.add('openMenu')
}

function closeMenu() {
  isItOpenOrClose.classList.remove('openMenu')
}