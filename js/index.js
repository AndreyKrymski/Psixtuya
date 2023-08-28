const elements = {
  menu: document.querySelector('.nav'),
  burgerBtn: document.querySelectorAll('.nav img'),
  menuLinks: document.querySelectorAll('.nav a'),

  html: document.querySelector('html'),

  readAbout: document.querySelector('.read'),
  readAll: document.querySelector('.read__all'),
  readAboutBtns: document.querySelectorAll('.read button'),

  readEdd: document.querySelector('.edd-read'),
  readEddAll: document.querySelector('.edd-read__all'),
  readEddBtns: document.querySelectorAll('.edd-read button'),

  line: document.querySelector('.line'),
  listsCheck: document.querySelectorAll('.lists__check'),
}

const toggleMenu = () => {
  elements.menu.classList.toggle('active')
  elements.html.classList.toggle('overflow')
}

const readAbout = () => {
  elements.readAbout.classList.toggle('active')
  if (elements.readAbout.classList.contains('active')) {
    const contentHeight = elements.readAll.scrollHeight;
    elements.readAll.style.maxHeight = contentHeight + 'px';
  } else {
    elements.readAll.style.maxHeight = '358px';
  }
}

const readEdd = () => {
  elements.readEdd.classList.toggle('active')
  if (elements.readEdd.classList.contains('active')) {
    const contentHeight = elements.readEddAll.scrollHeight;
    elements.readEddAll.style.maxHeight = contentHeight + 'px';
  } else {
    elements.readEddAll.style.maxHeight = '558px';
  }
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
  item.addEventListener('click', (e) => {
    e.preventDefault()
    elements.listsCheck.forEach((li) => {
      if (li !== item) {
        li.classList.remove('active');
      }
    })
    item.classList.toggle('active')
  })
})
