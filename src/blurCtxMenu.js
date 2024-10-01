document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('ctxMenuBlurIgnore')) {
    $('#contextMenu')[0].style.display = 'none';
    if ($('.feedCardActive').length > 0) $('.feedCardActive')[0].classList.remove('feedCardActive');
  }
})