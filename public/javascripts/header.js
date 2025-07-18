// this adds the "selected" class to the li that is
// associated with the current page.
const path = window.location.pathname
const activeLink = document.querySelector(`li > a[href*="${path}"`)
activeLink.parentElement.classList.add('selected')
