//  React Hooks
import { useEffect } from "react";
import useUserData from '../hooks/useUserData';
import { OutputCardPreview } from "../components/OutputCardPreview";


//  React Compontents
// import { FeedListSideBar } from "./FeedListSideBar";



export default function Output() {
  const [userData, setUserData] = useUserData({});

  useEffect(() => {
    const syncState = (e) => {
      if (e.key === 'rage.multicast.config')
        setUserData(JSON.parse(e.newValue))
    }
    window.addEventListener('storage', syncState)


    return () => {
      window.removeEventListener('storage', syncState)
    }
  }, [])

  
  console.log(userData)


  let outputId = new URL(window.location).searchParams.get('outputId');
  let outputObj = userData.outputs.find(outputObj => outputObj.outputId == outputId)

  return (
    <>
      <OutputCardPreview outputFeeds={outputObj.feeds} {...outputObj} inOutput={true} setUserData={setUserData} userData={userData} />
    </>
  )
}
