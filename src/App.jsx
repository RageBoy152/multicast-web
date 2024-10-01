//  React Hooks
// import { useState } from "react";
import useUserConfig from './useUserConfig';


//  React Compontents
import { FeedListSideBar } from "./FeedListSideBar";
import { OutputList } from "./OutputList";
import { NavBar } from "./navBar";



export default function App() {
  const [userConfig, setUserConfig] = useUserConfig({});

  console.log(userConfig);
  
  
  function deleteFeed() {
    let feedElem = $('.feedCardActive')[0]
    let outputName = feedElem.dataset.outputname;

    if (!outputName) {
      //  remove from feedlist
      
      setUserConfig((currentConfig) => ({
        ...currentConfig,
        feedList: [...currentConfig.feedList.filter(feedObj => feedObj.feedId != feedElem.id)]
      }))
    }
    else {
      //  remove from output feeds array
      
      
    }
    

    console.log(feedElem.id, outputName);
  }


  return (
    <>
      <div id="contextMenu" className="bg-primary absolute z-50 flex-col p-1 hidden">
        <a href="#" className="hover:bg-secondary p-2"><i className="bi bi-clipboard"></i> Copy Credits</a>
        <a href="#" className="hover:bg-secondary p-2"><i className="bi bi-pencil"></i> Edit Feed</a>
        <a onClick={deleteFeed} className="hover:bg-secondary hover:text-red-600 p-2 cursor-pointer"><i className="bi bi-trash"></i> Delete Feed</a>
      </div>
      <NavBar />
      <main className="flex">
        <FeedListSideBar feedListData={userConfig.feedList} setUserConfig={setUserConfig} />
        <OutputList outputsData={userConfig.outputs} />
      </main>
    </>
  )
}
