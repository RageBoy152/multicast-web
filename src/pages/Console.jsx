//  React Hooks
// import { useState } from "react";
import useUserData from '../hooks/useUserData';


//  React Compontents
import { FeedListSideBar } from "../components/FeedListSideBar";
import { OutputList } from "../components/OutputList";
import { NavBar } from "../components/navBar";
import { ContextMenu } from '../components/ContextMenu';
import { FeedModal } from '../components/FeedModal';
import { useState } from 'react';



export default function Console() {
  const [userData, setUserData] = useUserData({});

  const [editFeedObj, setEditFeedObj] = useState({});

  console.log(userData);


  return (
    <>
      <FeedModal setUserData={setUserData} editFeedObj={editFeedObj} setEditFeedObj={setEditFeedObj} />
      <ContextMenu setUserData={setUserData} userData={userData} setEditFeedObj={setEditFeedObj} />
      <NavBar notifications={userData.notifications} setUserData={setUserData} />
      <main className="flex">
        <FeedListSideBar feedListData={userData.feedList} />
        <OutputList outputsData={userData.outputs} />
      </main>
    </>
  )
}
