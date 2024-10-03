import { useEffect, useState } from "react";
import { OutputCardPreview } from "./OutputCardPreview";
import { Link } from 'react-router-dom'


export function OutputCard({ feeds, outputName, outputId, setUserData }) {
  const [newFeedCount, setNewFeedCount] = useState(feeds.length);
  const [prevNewFeedCount, setPrevNewFeedCount] = useState(feeds.length);


  function updateFeedCount(e) {
    setPrevNewFeedCount(newFeedCount);
    setNewFeedCount(e.target.value);
  }


  useEffect(() => {
    if (newFeedCount > 9 || newFeedCount < 0 || (newFeedCount == 0 && newFeedCount != '')) setNewFeedCount(prevNewFeedCount);

    if (newFeedCount < 10 && newFeedCount > 0 && newFeedCount != feeds.length) {
      let newFeedsArray = [];

      if (newFeedCount > feeds.length) {
        newFeedsArray = feeds;

        for (let i=feeds.length; i<newFeedCount; i++) {
          newFeedsArray.push({});
        }
      }
      else {
        newFeedsArray = feeds.slice(0, Number(newFeedCount));
      }
      
      

      setUserData((currentUserData) => ({
        ...currentUserData,
        outputs: [...currentUserData.outputs.map(outputObj => outputObj.outputId == outputId ? {
          ...outputObj,
          feedCount: newFeedCount,
          feeds: newFeedsArray
        } : outputObj)]
      }))
    }
  }, [newFeedCount])



  return (
    <div className="w-[500px]">
      <div className="bg-primary flex justify-between items-center px-3 py-2">
          <Link to={`/output?outputId=${outputId}`} target="_blank" className="h-min text-l"><i className="bi bi-box-arrow-up-right mr-1"></i> {outputName}</Link>
      </div>
      <OutputCardPreview outputFeeds={feeds} outputName={outputName} />
      <div className="bg-primary flex gap-3 items-center px-3 py-2 text-l">
          <label className="h-min">Feeds:</label>
          <input type="number" value={newFeedCount} min={1} max={9} onChange={updateFeedCount} className="bg-secondary w-[45px] text-center" />
      </div>
    </div>
  )
}