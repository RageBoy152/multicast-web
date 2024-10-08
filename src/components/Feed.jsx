import ReactPlayer from 'react-player';

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



export function Feed({ outputName, feedId, videoId, sideBarHidden, volume, basisClass = '', heightClass = '', setUserData, userData }) {
  //  defines context dependant styles for different parts of the feedcard. context dependant meanin either in the feeds list or in the output preview
  let feedCardContextClassStyles = basisClass == '' ? 'w-9/12' : 'flex-grow';

  const [newVolume, setNewVolume] = useState(volume);
  const [feedFuncsHidden, setFeedFuncsHidden] = useState(sideBarHidden);


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



  function toggleFeedFuncs() {
    setFeedFuncsHidden(!feedFuncsHidden);


    setUserData((currentData) => ({
      ...currentData,
      outputs: [
        ...currentData.outputs.map(outputObj =>
          outputObj.outputName == outputName ? {...outputObj, feeds: outputObj.feeds.map(feedObj => feedObj.feedId == feedId ? {...feedObj, sideBarHidden: !feedFuncsHidden} : feedObj)} : outputObj
        )
      ]
    }))
  }



  return (
    <div className={`${feedCardContextClassStyles} relative flex items-center feedOutput ${basisClass} ${heightClass}`}>
      <a onClick={toggleFeedFuncs} className="bg-accent hover:bg-accent/80 toggleSideBarBtn z-50 cursor-pointer h-[30px] w-[30px] rounded flex items-center justify-center mt-auto absolute bottom-5 start-2"><i className={`bi bi-arrow-bar-${feedFuncsHidden ? 'right' : 'left'}`}></i></a>

      
      <div className={`bg-primary flex flex-col items-center h-full transition-all duration-150 ease-linear ${feedFuncsHidden ? 'w-0' : 'w-[45px] px-2'}`} id={`feed_${feedId}_side-bar`}>
        {!feedFuncsHidden && (
          // {/* <p className="text-xs h-[10%] flex items-center">{newVolume}%</p> */}
          // {/* <input className="volumeInput h-[65%]" type="range" min={0} max={100} value={newVolume} onChange={setVol} /> */}

          // {/*    FOR APP VERSION - MAKE THIS HEIGHT H-25%    */}
          <div className="h-[100%] flex flex-col justify-center gap-3">
            <a onClick={() => copyCredits(userData, setUserData, outputName, feedId)} className="bg-accent hover:bg-accent/80 cursor-pointer h-[30px] w-[30px] rounded flex items-center justify-center"><i className="bi bi-clipboard"></i></a>
            <a href={`https://www.youtube.com/live_chat?is_popout=1&v=${videoId}`} target='_blank' className="bg-accent hover:bg-accent/80 cursor-pointer h-[30px] w-[30px] rounded flex items-center justify-center"><i className="bi bi-chat-left-text"></i></a>
          </div>
        )}
      </div>
      
      
      <div className={`bg-accent ${feedFuncsHidden ? 'w-full' : 'w-[calc(100%-45px)]'} h-full`}>
        <ReactPlayer url={`https://youtube.com/embed/${videoId}?autoplay=1`} playing={true} controls={true} width={"100%"} height={"100%"} />
      </div>
    </div>
  )
}