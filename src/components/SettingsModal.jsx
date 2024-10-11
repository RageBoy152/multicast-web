import { useEffect, useState } from 'react';
import { toggleModal } from '../utils/toggleModal';



export function SettingsModal({ userData, setUserData }) {
  const [newConfig, setNewConfig] = useState(JSON.stringify(userData, null, 2));

  const [configInputError, setConfigInputError] = useState('');
  const [configInputAdvErr, setConfigInputAdvErr] = useState('');

  const [lockedTextarea, setLockedTextarea] = useState(true);


  const [newFeedFuncBarMode, setNewFeedFuncBarMode] = useState(() => {
    if (userData.preferences && userData.preferences.feedFuncBarMode) { return userData.preferences.feedFuncBarMode; }
    else { return 'always'; }
  });


  useEffect(() => {
    setNewConfig(JSON.stringify(userData, null, 2));
  }, [userData])


  function toggleModalHandler() {
    toggleModal('settings-modal-container', () => {
      setNewConfig(JSON.stringify(userData, null, 2));
      setConfigInputError('');
      setConfigInputAdvErr('');
      setLockedTextarea(true);
    });
  }



  function copyConfig() {
    navigator.clipboard.writeText(JSON.stringify(userData, null, 2));
    setUserData((currentUserData) => ({
      ...currentUserData,
      notifications: [{
        notificationId: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        title: 'Copied saved config to clipboard',
        status: 'success'
      }, ...currentUserData.notifications]
    }))
  }



  function toggleLockedTextarea() {
    setLockedTextarea(!lockedTextarea);
  }



  function saveConfigChanges() {
    let parsedConfigInput;

    //  JSON PARSE VALIDATION
    try { parsedConfigInput = JSON.parse(newConfig); }
    catch (err) { setConfigInputError('Invalid config - JSON parsing error'); setConfigInputAdvErr(err.toString()); return; }

    setConfigInputAdvErr('');

    //  PROPS VALIDATION
    if (!parsedConfigInput.outputs || !Array.isArray(parsedConfigInput.outputs)) { setConfigInputError(`Invalid config - missing 'outputs' property`); return; }
    if (!parsedConfigInput.feedList || !Array.isArray(parsedConfigInput.feedList)) { setConfigInputError(`Invalid config - missing 'feedList' property`); return; }
    if (!parsedConfigInput.notifications || !Array.isArray(parsedConfigInput.notifications)) { setConfigInputError(`Invalid config - missing 'notifications' property`); return; }

    setConfigInputError('');



    setUserData((currentUserData) => ({
      ...parsedConfigInput,
      notifications: [{
        notificationId: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        title: 'Edited config',
        status: 'success'
      }, ...parsedConfigInput.notifications]
    }))
  }



  function setPreference(key, value) {
    setNewFeedFuncBarMode(value);

    setUserData((currentUserData) => {
      let newPreferencesObj = currentUserData.preferences || {};
      newPreferencesObj[key] = value;

      return {
        ...currentUserData,
        preferences: newPreferencesObj
      }
    })
  }



  return (
    <div onMouseDown={(e)=>{if (e.target.id == "settings-modal-container") toggleModalHandler()}} id="settings-modal-container" className="bg-black/25 flex items-top justify-center absolute z-[60] w-full h-full" style={{display: "none"}}>
      <div className="bg-primary border border-secondary px-2 flex flex-col items-center mt-24 w-1/3 h-min">
        <div className="border-b border-accent px-3 py-3 flex justify-between items-center w-full">
          <h3 className="text-xl">Settings</h3>
          <a className="cursor-pointer text-text-shade hover:text-text" onClick={toggleModalHandler}><i className="bi bi-x-lg"></i></a>
        </div>


        <div className="flex w-11/12 justify-between items-center gap-3 mt-5 mb-5">
          <p className="text-l">Feed sidebar visibility</p>

          <section className="slider-checkbox">
            <select className='bg-secondary px-2 py-1' value={newFeedFuncBarMode} onChange={(e) => setPreference('feedFuncBarMode', e.target.value)} >
              <option value="hover">Visible on hover</option>
              <option value="always">Always visible</option>
            </select>
          </section>
        </div>


        <div className="flex w-11/12 flex-col mb-5">
          <p className="text-l">Config:</p>
          <p className="text-sm text-text-shade">Your feed and output configuration.</p>
          
          <div className='h-[300px] my-3 relative'>
            <textarea className='bg-secondary text-xs px-2 py-1 resize-none w-full h-full' readOnly={lockedTextarea} value={newConfig} onChange={(e) => setNewConfig(e.target.value)}></textarea>
            <div className="absolute top-3 end-3 gap-3 flex">
              <a onClick={copyConfig} className='bg-primary hover:bg-primary/80 rounded cursor-pointer aspect-square w-[30px] flex items-center justify-center'><i className="bi bi-clipboard"></i></a>
              <a onClick={toggleLockedTextarea} className='bg-primary hover:bg-primary/80 rounded cursor-pointer aspect-square w-[30px] flex items-center justify-center'><i className={`bi ${lockedTextarea ? 'bi-lock' : 'bi-unlock'}`}></i></a>
            </div>
          </div>

          <div className='text-sm text-red-400'>{configInputError} <p className={`text-xs mt-2 p-2 bg-secondary/25 ${!configInputAdvErr && 'hidden'}`}>{configInputAdvErr}</p></div>

          <div className="flex justify-end gap-5 my-1">
            <a className="bg-secondary hover:bg-secondary/80 cursor-pointer p-2 px-5" onClick={toggleModalHandler}>Cancel</a>
            <a className="bg-accent hover:bg-accent/80 cursor-pointer p-2 px-5" onClick={saveConfigChanges}>Save changes to config</a>
          </div>
          <p className='text-xs text-red-400 text-end font-bold mt-2'>Warning: please do not manually edit your config unless you know what you're doing.</p>
        </div>
      </div>
    </div>
  )
}