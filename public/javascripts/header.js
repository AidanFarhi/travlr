// this adds the "selected" class to the li that is
// associated with the current page.
document.querySelector(`li > a[href*="${window.location.pathname}"`).parentElement.classList.add('selected')
