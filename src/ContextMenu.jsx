import { toggleFeedModal } from './toggleFeedModal';



export function ContextMenu({ setUserData, userData, setEditFeedName, setEditFeedSource }) {
  function deleteFeed() {
    let feedElem = $('.feedCardActive')[0]
    let outputName = feedElem.dataset.outputname;
    let feedName = '';
    

    function getNotif(name) {
      return {
        notificationId: crypto.randomUUID(),
        title: `Deleted feed '${name}'`,
        status: 'success'
      }
    }


    if (!outputName) {
      //  get feedname for notif
      feedName = userData.feedList.find(feedObj => feedObj.feedId == feedElem.id).feedName;


      //  remove from feedlist

      setUserData((currentData) => ({
        ...currentData,
        feedList: [...currentData.feedList.filter(feedObj => feedObj.feedId != feedElem.id)],
        notifications: [getNotif(feedName), ...currentData.notifications]
      }))
    }
    else {
      //  get feedname for notif
      feedName = userData.outputs.find(outputObj => outputObj.outputName == outputName).feeds.find(feed => feed.feedId == feedElem.id).feedName;


      //  remove from output feeds array
      
      setUserData((currentData) => ({
        ...currentData,
        outputs: [
          ...currentData.outputs.map(outputObj =>
            outputObj.outputName == outputName ? {...outputObj, feeds: outputObj.feeds.map(feed => feed.feedId == feedElem.id ? {} : feed)} : outputObj
          )],
        notifications: [getNotif(feedName), ...currentData.notifications]
      }))
    }
    

    console.log(feedElem.id, outputName);
  }



  function toggleFeedModalHandler() {
    let feedElem = $('.feedCardActive')[0];
    let outputName = feedElem.dataset.outputname;

    let feedObj = !outputName ? userData.feedList.find(feedObj => feedObj.feedId == feedElem.id) : userData.outputs.find(outputObj => outputObj.outputName == outputName).feeds.find(feed => feed.feedId == feedElem.id);
    
    console.log(feedObj)

    setEditFeedName(feedObj.feedName);
    setEditFeedSource(`https://youtube.com/watch?v=${feedObj.videoId}`);
    toggleFeedModal();
  }



  return (
    <div id="contextMenu" className="bg-primary absolute z-50 flex-col p-1 hidden">
      <a href="#" className="hover:bg-secondary p-2"><i className="bi bi-clipboard"></i> Copy Credits</a>
      <a onClick={toggleFeedModalHandler} className="hover:bg-secondary p-2 cursor-pointer"><i className="bi bi-pencil"></i> Edit Feed</a>
      <a onClick={deleteFeed} className="hover:bg-secondary hover:text-red-600 p-2 cursor-pointer"><i className="bi bi-trash"></i> Delete Feed</a>
    </div>
  )
}