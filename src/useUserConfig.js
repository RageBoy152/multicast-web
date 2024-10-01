import { useEffect, useState } from "react";


function getConfig(initialValue) {
  let localStorageData = localStorage.getItem("rage.multicast.config");

  //  return local storage value or return initialValue or result of initialValue()
  return localStorageData != null ? JSON.parse(localStorageData) : initialValue instanceof Function ? initialValue() : initialValue;
}


export default function useUserConfig(initialValue) {
  const [userConfig, setUserConfig] = useState(getConfig(initialValue));


  //  save to local storage on update
  useEffect(() => {
    localStorage.setItem("rage.multicast.config", JSON.stringify(userConfig));
    // console.log(`User config updated and saved as: ${JSON.stringify(userConfig, null, 2)}`)
  }, [userConfig])
  

  return [userConfig, setUserConfig];
}