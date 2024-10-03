import { Notification } from './Notification';



export function NotificationDropdown({ notifications, setUserData }) {
  return (
    <div id="notifications-container" className="bg-primary absolute top-[50px] mr-8 w-3/12 max-h-80 z-50 flex flex-col" style={{display: "none"}}>
      <div className="flex justify-between items-center py-1 px-3 border-b border-accent">
        <p>Notifications</p>
        {/* <a className="cursor-pointer"><i className="bi bi-x-lg"></i></a> */}
      </div>
      <div className="flex flex-col gap-1 overflow-auto">
        {notifications.map(notification => <Notification key={notification.notificationId} {...notification} setUserData={setUserData} />)}
      </div>
    </div>
  )
}