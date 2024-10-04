export function toggleModal(id, callback) {
  let container = $(`#${id}`);
  
  if  (!container[0]) return

  if (container[0].getBoundingClientRect().width != 0) {
    //  hide container
    $(`#${id} > div`).slideUp(300, 'swing', () => container.fadeOut(200, 'linear', () => { if (callback && typeof callback == 'function') callback(); }))
  }
  else {
    //  show container
    container.fadeIn(200, 'linear', () => $(`#${id} > div`).slideDown(300, 'swing', () => { if (callback && typeof callback == 'function') callback(); }))
  }
}