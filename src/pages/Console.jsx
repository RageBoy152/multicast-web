//  React Hooks
import { useEffect } from "react";
import useUserData from '../hooks/useUserData';


//  React Compontents
import { FeedListSideBar } from "../components/FeedListSideBar";
import { OutputList } from "../components/OutputList";
import { NavBar } from "../components/NavBar";
import { ContextMenu } from '../components/ContextMenu';
import { FeedModal } from '../components/FeedModal';
import { useState } from 'react';



export default function Console() {
  const [userData, setUserData] = useUserData({});
  const [editFeedObj, setEditFeedObj] = useState({});


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


  console.log(userData);


  return (
    <>
      <FeedModal setUserData={setUserData} editFeedObj={editFeedObj} setEditFeedObj={setEditFeedObj} />
      <ContextMenu setUserData={setUserData} userData={userData} editFeedObj={editFeedObj} setEditFeedObj={setEditFeedObj} />
      <NavBar notifications={userData.notifications} setUserData={setUserData} />
      <main className="flex">
        <FeedListSideBar feedListData={userData.feedList} setUserData={setUserData} />
        <OutputList outputsData={userData.outputs} setUserData={setUserData} />
      </main>
    </>
  )
}
