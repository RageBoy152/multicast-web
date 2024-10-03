function openCtxMenu(e) {
  e.preventDefault();

  // clear old active feed class
  if ($('.feedCardActive').length > 0) $('.feedCardActive')[0].classList.remove('feedCardActive');

  // get ctx menu
  let ctxMenu = $('#contextMenu')[0];
  
  // position ctx menu
  ctxMenu.style.top = e.type == "contextmenu" ? `${e.clientY}px` : `${e.target.getBoundingClientRect().top}px`;
  ctxMenu.style.left = e.type == "contextmenu" ? `${e.clientX}px` : `${e.target.getBoundingClientRect().right}px`;
  ctxMenu.style.display = 'flex';

  // add active feed class - different parent tree based on caller location
  e.type != "contextmenu" ? e.target.parentNode.parentNode.parentNode.classList.add('feedCardActive') : e.target.parentNode.parentNode.classList.add('feedCardActive');
}



export function FeedCard({ outputName, feedId, feedName, videoId, volume, basisClass = '', heightClass = '' }) {
  //  defines context dependant styles for different parts of the feedcard. context dependant meanin either in the feeds list or in the output preview
  let feedCardContextClassStyles = basisClass == '' ? 'w-9/12' : 'flex-grow feedCard border border-primary';
  let feedCardHeadingContextClassStyles = basisClass == '' ? 'bg-primary' : 'absolute top-0 w-full bg-primary/80 feedCardHeading';


  function dragStart(e) {
    e.dataTransfer.setData('feedId', feedId);
  }
  function dragOver(e) {
    // e.preventDefault();
    
    if (e.target.classList.contains('feed-card-drag-over-element')) {
      // $(`${e.dataTransfer.getData('feedId')}`)[0].classList.add('cursor-pointer')
    }
  }
  function dragEnd(e) {
    e.preventDefault();

    console.log(e.dataTransfer.getData('feedId'))
  }


  return (
    <div onContextMenu={openCtxMenu} onDragStart={dragStart} onDragOver={dragOver} onDragEnd={dragEnd} className={`${feedCardContextClassStyles} cursor-grab active:cursor-grabbing relative flex flex-col justify-center feed-card-drag-over-element ${basisClass} ${heightClass}`} id={feedId} data-outputname={outputName}>
      <div className={`flex justify-between items-center px-3 py-1 ${feedCardHeadingContextClassStyles} feed-card-drag-over-element`}>
        <h3 className="h-min text-l feed-card-drag-over-element">{feedName}</h3>
        <a onClick={openCtxMenu} className="h-min text-sm cursor-pointer ctxMenuBlurIgnore feed-card-drag-over-element"><i className="bi bi-three-dots-vertical ctxMenuBlurIgnore"></i></a>
      </div>
      <div className="bg-accent feed-card-drag-over-element">
        <img src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`} className="feed-card-drag-over-element w-full aspect-video h-full object-contain feedCardImg" />
      </div>
    </div>
  )
}