import { useEffect, useState } from "react";
import { copyCredits } from "../utils/copyCredits";


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



export function Feed({ outputName, feedId, videoId, volume, basisClass = '', heightClass = '', setUserData, userData }) {
  //  defines context dependant styles for different parts of the feedcard. context dependant meanin either in the feeds list or in the output preview
  let feedCardContextClassStyles = basisClass == '' ? 'w-9/12' : 'flex-grow';

  const [newVolume, setNewVolume] = useState(volume);


  function setVol(e) {
    setNewVolume(e.target.value)

    setUserData((currentData) => ({
      ...currentData,
      outputs: [
        ...currentData.outputs.map(outputObj =>
          outputObj.outputName == outputName ? {...outputObj, feeds: outputObj.feeds.map(feedObj => feedObj.feedId == feedId ? {...feedObj, volume: e.target.value.toString()} : feedObj)} : outputObj
        )
      ]
    }))
  }

  

  return (
    <div className={`${feedCardContextClassStyles} relative flex items-center ${basisClass} ${heightClass}`}>
      <div className="bg-primary flex flex-col items-center h-full px-2">
        <p className="text-xs h-[10%] flex items-center">{newVolume}%</p>
        <input className="volumeInput h-[65%]" type="range" min={0} max={100} value={newVolume} onChange={setVol} />
        <div className="h-[25%] flex flex-col justify-center gap-3">
          <a onClick={() => copyCredits(userData, setUserData, outputName, feedId)} className="bg-accent hover:bg-accent/80 cursor-pointer h-[30px] w-[30px] rounded flex items-center justify-center"><i className="bi bi-clipboard"></i></a>
          <a className="bg-accent hover:bg-accent/80 cursor-pointer h-[30px] w-[30px] rounded flex items-center justify-center"><i className="bi bi-chat-left-text"></i></a>
        </div>
      </div>
      <div className="bg-accent w-full h-full">
        <iframe src={`https://youtube.com/embed/${videoId}?autoplay=1`} className="h-full w-full"></iframe>
      </div>
    </div>
  )
}