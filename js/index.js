const elements = {
  menu: document.querySelector('.nav'),
  burgerBtn: document.querySelectorAll('.nav img'),
  menuLinks: document.querySelectorAll('.nav a'),

  html: document.querySelector('html'),

  readAbout: document.querySelector('.read'),
  readAboutBtns: document.querySelectorAll('.read button'),

  readEdd: document.querySelector('.edd-read'),
  readEddBtns: document.querySelectorAll('.edd-read button'),


  line: document.querySelector('.line'),

  listsCheck: document.querySelectorAll('.lists__check'),

  counters: {},
}

const toggleMenu = () => {
  elements.menu.classList.toggle('active')
  elements.html.classList.toggle('overflow')
}

const readAbout = () => {
  elements.readAbout.classList.toggle('active')
}

const readEdd = () => {
  elements.readEdd.classList.toggle('active')
}

elements.burgerBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(),
    toggleMenu()
  })
})

elements.menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    elements.html.classList.remove('overflow')
    elements.menu.classList.remove('active')
  })
})

elements.readAboutBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    readAbout()
  })
})

elements.readEddBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    readEdd()
  })
})


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








