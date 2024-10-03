export function toggleFeedModal(callback) {
  let container = $('#feed-modal-container');

  if (container[0].getBoundingClientRect().width != 0) {
    //  hide container
    $('#feed-modal-container > div').slideUp(300, 'swing', () => container.fadeOut(200, 'linear', () => { if (callback && typeof callback == 'function') callback(); }))
  }
  else {
    //  show container
    container.fadeIn(200, 'linear', () => $('#feed-modal-container > div').slideDown(300, 'swing', () => { if (callback && typeof callback == 'function') callback(); }))
  }
}