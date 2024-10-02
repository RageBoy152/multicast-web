export function toggleFeedModal(callback) {
  let container = $('#feed-modal-container');

  if (container[0].getBoundingClientRect().width != 0) {
    //  hide container
    $('#feed-modal-container > div').slideToggle(400, 'linear', () => container.fadeOut(200, 'linear', () => { if (callback && typeof callback == 'function') callback(); }))
  }
  else {
    //  show container
    container.fadeIn(200, 'linear', () => $('#feed-modal-container > div').slideToggle(400, 'linear', () => { if (callback && typeof callback == 'function') callback(); }))
  }
}