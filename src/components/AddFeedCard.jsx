import { toggleFeedModal } from '../utils/toggleFeedModal';



export function AddFeedCard() {  
  return (
    <div onClick={toggleFeedModal} className="w-9/12 aspect-video border border-text flex items-center justify-center hover:bg-text/10 cursor-pointer text-text-shade hover:text-text">
      <i className="bi bi-plus text-xxl"></i>
    </div>
  )
}