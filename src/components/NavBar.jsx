import { NotificationDropdown } from './NotificationDropdown';
import { toggleModal } from '../utils/toggleModal';



export function NavBar({ notifications, setUserData }) {

  function toggleNotificationsDropdown() {
    $('#notifications-container').fadeToggle(200);
  }



  return (
    <nav className="bg-primary border-b border-b-accent flex justify-end items-center gap-10 px-20 h-[50px]">
      <a className="font-Orbitron justify-self-start mr-auto h-min text-l">MultiCast
      <span className=" text-text-shade text-xs">V2.0</span>
      </a>
      <a onClick={toggleNotificationsDropdown} id="notifications-dropdown-btn" className="text-text-shade hover:text-text h-min text-base cursor-pointer"><i className="bi bi-bell"></i></a>
      <a onClick={() => toggleModal('bug-report-modal-container')} className="text-text-shade hover:text-text h-min text-base cursor-pointer"><i className="bi bi-bug"></i></a>
      <a onClick={() => toggleModal('settings-modal-container')} className="text-text-shade hover:text-text h-min text-base cursor-pointer"><i className="bi bi-gear"></i></a>
      <NotificationDropdown notifications={notifications} setUserData={setUserData} />
    </nav>
  )
}