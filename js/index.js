const elements = {
  burgerOpen: document.querySelector('.burger_open'),
  burgerClose: document.querySelector('.burger_close'),
  menu: document.querySelector('.mobile-navigation__menu'),
  line: document.querySelector('.line'),
  html: document.querySelector('html'),
  readMoreButton: document.querySelector('.btn_read-more1'),
  hideButton: document.querySelector('.btn_hide1'),

  readMoreButton2: document.querySelector('.btn_read-more2'),
  hideButton2: document.querySelector('.btn_hide2'),

  readMoreDiv: document.querySelector('.read-more_mh358'),
  readMoreDiv2: document.querySelector('.read-more_mh500'),

  listsCheck: document.querySelectorAll('.lists__check'),

  counters: {},
}


function openMenu() {
  elements.menu.style.display = 'flex'
  elements.burgerClose.style.display = 'block'
  elements.burgerOpen.style.display = 'none'
  elements.line.style.display = 'block'
  elements.html.classList.add('overflow')
}
function closeMenu() {
  elements.menu.style.display = 'none'
  elements.burgerClose.style.display = 'none'
  elements.burgerOpen.style.display = 'block'
  elements.line.style.display = 'none'
  elements.html.classList.remove('overflow')
}

document.querySelectorAll('.mobile-navigation li').forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const hre = item.querySelector('a')
    const section = document.getElementById(hre.getAttribute('href'))
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
    closeMenu()
  })
})




function readMore(height) {
  if (height) {
    elements.readMoreDiv.style.maxHeight = height;
    elements.readMoreButton.style.display = 'inline';
    elements.hideButton.style.display = 'none';
  } else {
    elements.readMoreDiv.style.maxHeight = 'none'
    elements.readMoreButton.style.display = 'none';
    elements.hideButton.style.display = 'inline';
  }
}

function readMore2(height) {
  if (height) {
    elements.readMoreDiv2.style.maxHeight = height;
    elements.readMoreButton2.style.display = 'inline';
    elements.hideButton2.style.display = 'none';
  } else {
    elements.readMoreDiv2.style.maxHeight = 'none'
    elements.readMoreButton2.style.display = 'none';
    elements.hideButton2.style.display = 'inline';
  }
}


elements.listsCheck.forEach((item) => {
  elements.counters[item.id] = 0;
  item.addEventListener('click', (e) => {

    e.preventDefault();
    const counter = elements.counters[item.id];
    const dopInfo = e.target.querySelector('.lists__dopInfo')

    if (counter % 2 === 0) {
      dopInfo.style.display = 'block'
    } else {
      dopInfo.style.display = 'none'
    }
    item.classList.toggle('active')

    elements.counters[item.id]++;

  })
})








