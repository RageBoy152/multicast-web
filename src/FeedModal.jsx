import { useState } from 'react';
import { toggleFeedModal } from './toggleFeedModal';



export function FeedModal({ setUserData, editFeedName, editFeedSource }) {
  const [newFeedName, setNewFeedName] = useState(editFeedName);
  const [newFeedSource, setNewFeedSource] = useState(editFeedSource);



  function addFeed() {
    if (!newFeedName.match(/^[\w]+$/)) { console.log("invalid name"); return }
    if (!newFeedSource.match(/^(https|http)+\:\/\/youtube+\.+com+(\/live|\/watch)+\?v=+[\w\-\_0-9]+$/)) { console.log("invalid source"); return }


    let videoURL = new URL(newFeedSource);
    let videoId = videoURL.searchParams.get('v');


    let newFeedObj = {
      feedId: crypto.randomUUID(),
      feedName: `${newFeedName}`,
      videoId: `${videoId}`,
      volume: 50,
    }

    let addFeedNotificationObj = {
      notificationId: crypto.randomUUID(),
      title: `Added feed ${newFeedName}`,
      status: 'success'
    }

    toggleFeedModalHandler();

    setUserData((currentData) => ({
      ...currentData,
      feedList: [newFeedObj, ...currentData.feedList],
      notifications: [addFeedNotificationObj, ...currentData.notifications]
    }))
  }


  function toggleFeedModalHandler() {
    toggleFeedModal(() => {
      setNewFeedName('');
      setNewFeedSource('');
    });
  }



  return (
    <div id="feed-modal-container" className="bg-black/25 flex items-top justify-center absolute z-[60] w-full h-full">
      <div className="bg-primary border border-secondary px-2 flex flex-col items-center mt-36 w-1/2 h-min">
        <div className="border-b border-accent px-3 py-3 flex justify-between items-center w-full">
          <h3 className="text-xl">Add Feed</h3>
          <a className="cursor-pointer text-text-shade hover:text-text" onClick={toggleFeedModalHandler}><i className="bi bi-x-lg"></i></a>
        </div>
        <div className="flex w-11/12 flex-col gap-2 py-4">
          <div className="flex flex-col">
            <p className="text-l">Name:</p>
            <input value={newFeedName} onChange={e => setNewFeedName(e.target.value)} className="bg-secondary text-l px-2 py-1" type="text" />
          </div>
          
          <div className="flex flex-col">
            <p className="text-l">Source:</p>
            <input value={newFeedSource} onChange={e => setNewFeedSource(e.target.value)} className="bg-secondary text-l px-2 py-1" type="text" />
          </div>
        </div>
        <div className="border-t border-accent flex justify-end gap-5 w-full py-3 px-3">
          <a className="bg-secondary hover:bg-secondary/80 cursor-pointer p-2 px-5" onClick={toggleFeedModalHandler}>Cancel</a>
          <a className="bg-accent hover:bg-accent/80 cursor-pointer p-2 px-5" onClick={addFeed}>Add Feed</a>
        </div>
      </div>
    </div>
  )
}