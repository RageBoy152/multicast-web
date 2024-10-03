//  React Hooks
import { useEffect } from "react";
import useUserData from '../hooks/useUserData';


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


  return (
    <>
      <main className="flex">
        <p>Hi this is an output</p>
      </main>
    </>
  )
}
