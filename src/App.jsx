//  React Hooks
// import { useState } from "react";
import useUserData from './useUserData';


//  React Compontents
import { FeedListSideBar } from "./FeedListSideBar";
import { OutputList } from "./OutputList";
import { NavBar } from "./navBar";
import { ContextMenu } from './ContextMenu';
import { FeedModal } from './FeedModal';
import { useState } from 'react';



export default function App() {
  const [userData, setUserData] = useUserData({});

  const [editFeedName, setEditFeedName] = useState('');
  const [editFeedSource, setEditFeedSource] = useState('');

  console.log(userData);


  return (
    <>
      <FeedModal setUserData={setUserData} editFeedName={editFeedName} editFeedSource={editFeedSource} />
      <ContextMenu setUserData={setUserData} userData={userData} setEditFeedName={setEditFeedName} setEditFeedSource={setEditFeedSource} />
      <NavBar notifications={userData.notifications} setUserData={setUserData} />
      <main className="flex">
        <FeedListSideBar feedListData={userData.feedList} />
        <OutputList outputsData={userData.outputs} />
      </main>
    </>
  )
}
