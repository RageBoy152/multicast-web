import { toggleModal } from '../utils/toggleModal';



export function AddFeedCard() {  
  return (
    <div onClick={() => toggleModal('feed-modal-container')} className="w-9/12 aspect-video border border-text flex items-center justify-center hover:bg-text/10 cursor-pointer text-text-shade hover:text-text">
      <i className="bi bi-plus text-xxl"></i>
    </div>
  )
}