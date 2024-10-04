import { useEffect, useState } from 'react';
import { toggleModal } from '../utils/toggleModal';



export function LimitedFeaturesInfoModal() {
  
  
  function toggleModalHandler() {
    toggleModal('limited-features-modal-container');
  }
  
  
  return (
    <div onMouseDown={(e)=>{if (e.target.id == "limited-features-modal-container") toggleModalHandler()}} id="limited-features-modal-container" className="bg-black/25 flex items-top justify-center absolute z-[60] w-full h-full" style={{display: "none"}}>
      <div className="bg-primary border border-secondary px-2 flex flex-col items-center mt-24 w-1/3 h-min">
        <div className="border-b border-accent px-3 py-3 flex justify-between items-center w-full">
          <h3 className="text-xl">Why are some features disabled?</h3>
          <a className="cursor-pointer text-text-shade hover:text-text" onClick={toggleModalHandler}><i className="bi bi-x-lg"></i></a>
        </div>
        <div className="flex w-11/12 flex-col gap-5 py-4">
          <div className="flex flex-col gap-1">
            <p className='font-bold'>Multicast web is missing the following features:</p>
            <ul className='list-disc px-6'>
              <li>Feed volume sliders</li>
              <li>Feed audio visualisers</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className='text-sm'>These features are unable to be implemented due to security concerns. If it was up to me, they would be implemented.</p>
            <p className='text-sm border-t border-accent pt-5'>To get the full Multicast experience, please consider downloading the <a className='text-text-shade hover:text-text underline' target='_blank' href="https://github.com/RageBoy152/multicast">Multicast App</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}