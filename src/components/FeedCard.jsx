import { feedCardDragOver, feedCardDragStart, feedCardDrop } from '../utils/feedCardDragDrop';



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



export function FeedCard({ outputName, feedId, feedName, videoId, volume, basisClass = '', heightClass = '', setUserData, feedIndex }) {
  //  defines context dependant styles for different parts of the feedcard. context dependant meanin either in the feeds list or in the output preview
  let feedCardContextClassStyles = basisClass == '' ? 'w-9/12' : 'flex-grow feedCard border border-primary';
  let feedCardHeadingContextClassStyles = basisClass == '' ? 'bg-primary' : 'absolute top-0 w-full bg-primary/80 feedCardHeading';


  function drop(e, targetFeedId) {
    if (basisClass == '') { e.preventDefault(); return; }

    if (targetFeedId == e.dataTransfer.getData('feedId')) { console.log("same feed, return"); return; }
    console.log("hi again")
  }


  return (
    <div onContextMenu={openCtxMenu} onDragStart={(e) => feedCardDragStart(e, feedId, outputName)} onDragOver={feedCardDragOver} onDrop={(e) => feedCardDrop(e, feedIndex, feedId, outputName, basisClass == '', setUserData)} draggable className={`${feedCardContextClassStyles} cursor-grab active:cursor-grabbing relative flex flex-col justify-center ${basisClass} ${heightClass}`} id={feedId} data-outputname={outputName}>
      <div className={`flex justify-between items-center px-3 py-1 ${feedCardHeadingContextClassStyles}`}>
        <h3 className="h-min text-l">{feedName}</h3>
        <a onClick={openCtxMenu} className="h-min text-sm cursor-pointer ctxMenuBlurIgnore"><i className="bi bi-three-dots-vertical ctxMenuBlurIgnore"></i></a>
      </div>
      <div className="bg-accent h-full">
        <img src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`} className="w-full aspect-video h-full object-contain feedCardImg" />
      </div>
    </div>
  )
}