console.log('app.js')

var btn = document.querySelectorAll('[data-filter]')

;[...btn].map((e) => {
  e.onmouseover = () => {
    ;(e.style.backgroundColor = `var(--primary-action-color)`),
      (e.style.color = 'white')
  }
  e.onmouseout = () => {
    e.getAttribute('data') !== ''
      ? ((e.style.backgroundColor = `var(--btn-category-color)`),
        (e.style.color = `var(--project-item-heading-color)`))
      : ''
  }
  e.onclick = () => {
    ;[...btn].map((e) => {
      e.classList.remove('active-btn'),
        e.setAttribute('data', 'active'),
        (e.style.backgroundColor = ''),
        (e.style.color = '')
    })
    e.setAttribute('data', ''),
      e.classList.add('active-btn'),
      (e.style.backgroundColor = `var(--primary-action-color)`),
      (e.style.color = 'white')
  }
})
