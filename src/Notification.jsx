export function Notification({ title, body, status, notificationId, setUserData }) {
  let statusClass = 'border-text';
  status == 'success' ? statusClass = 'border-green-400' : statusClass = 'border-red-400';


  function deleteNotification() {
    setUserData((currentUserData) => ({
      ...currentUserData,
      notifications: [...currentUserData.notifications.filter(notification => notification.notificationId != notificationId)]
    }))
  }


  return (
    <div className={`hover:bg-secondary/25 border-l-2 ${statusClass} flex items-center justify-between py-1 px-3`}>
      <div className="flex flex-col">
        <h3 className="text-sm">{title}</h3>
        <p className="text-xs">{body}</p>
        <p className="text-xxs">1m ago</p>
      </div>
      <a onClick={deleteNotification} className="cursor-pointer text-text-shade hover:text-text"><i className="bi bi-x-lg"></i></a>
    </div>
  )
}