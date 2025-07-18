// this adds the "active" class to the li that is
// associated with the current page.
document.querySelector(`#footer > div > ul > li > a[href*="${window.location.pathname}"`).parentElement.classList.add('active')
