import { useEffect, useState } from 'react';
import { toggleModal } from '../utils/toggleModal';
import { logs, errors, warns, debugs } from '../utils/logConsoleActivity';



export function BugReportModal() {  
  const [consoleValue, setConsoleValue] = useState({});



  function toggleModalHandler() {
    toggleModal('bug-report-modal-container');
  }


  function prepBugReport(e) {
    setConsoleValue({
      logs: JSON.stringify(logs),
      errors: JSON.stringify(errors),
      warns: JSON.stringify(warns),
      debugs: JSON.stringify(debugs)
    })
  }


  useEffect(() => {
    if (consoleValue.logs)
      $('#bug-report-form')[0].submit();
  }, [consoleValue])

  
  return (
    <div onMouseDown={(e)=>{if (e.target.id == "bug-report-modal-container") toggleModalHandler()}} id="bug-report-modal-container" className="bg-black/25 flex items-top justify-center absolute z-[60] w-full h-full" style={{display: "none"}}>
      <div className="bg-primary border border-secondary px-2 flex flex-col items-center mt-24 w-1/3 h-min">
        <div className="border-b border-accent px-3 py-3 flex justify-between items-center w-full">
          <h3 className="text-xl">Report a Bug</h3>
          <a className="cursor-pointer text-text-shade hover:text-text" onClick={toggleModalHandler}><i className="bi bi-x-lg"></i></a>
        </div>
        <form className="flex w-11/12 flex-col gap-5 py-4" id='bug-report-form' name='bug-report-form' method='POST' action='/'>
          <input type="hidden" name="form-name" value="bug-report-form" />
          
          <div className="flex flex-col gap-1">
            <label htmlFor="bug-description">Brief or detailed description</label>
            <textarea name="bug-description" id="bug-description" className='bg-secondary px-2 py-1 resize-none h-[120px]'></textarea>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="screenshot">Screenshot (optional)</label>
            <input type="file" name="screenshot" id="screenshot" className='bg-secondary hover:bg-secondary/80 cursor-pointer p-2' />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="console">Console (automated)</label>
            <input type="text" name="console" id="console" className='bg-secondary p-2' value={JSON.stringify(consoleValue)} />
          </div>

          <div className="flex justify-end gap-4 border-t border-accent pt-4">
            <a className="bg-secondary hover:bg-secondary/80 cursor-pointer p-2 px-5" onClick={toggleModalHandler}>Cancel</a>
            <a className="bg-accent hover:bg-accent/80 cursor-pointer p-2 px-5" onClick={prepBugReport}>Submit Bug Report</a>
          </div>
        </form>
      </div>
    </div>
  )
}