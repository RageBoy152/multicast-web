export function Notification({ title, body, status, notificationId, setUserData, toast, timeAgo }) {
  let statusClass = 'border-text';
  status == 'success' ? statusClass = 'border-green-400' : status == 'info' ? statusClass = 'border-gray-400' : statusClass = 'border-red-400';


  function deleteNotification(e, notiId, toast) {
    $(`#notification-${toast ? 'toast' : 'dropdown'}-${notiId}`).slideToggle(150, 'linear', () => {
      if (toast) {
        //  if dismissed from toast list, add toasted=true prop to noti obj
        
        setUserData((currentUserData) => ({
          ...currentUserData,
          notifications: [...currentUserData.notifications.map(notification => notification.notificationId == notificationId ? {...notification, toasted: true} : notification)]
        }))
      }
      else {
        //  if in dropdown, delete from data

        setUserData((currentUserData) => ({
          ...currentUserData,
          notifications: [...currentUserData.notifications.filter(notification => notification.notificationId != notificationId)]
        }))
      }
    });
  }



  //  AUTO DISMISS TOASTS
  if (toast) {
    (() => {
      window.setTimeout(() => {
        deleteNotification(undefined, notificationId, true)
      }, 3000)
    })(notificationId)
  }
  

  let timeAgoStr;
  if (!toast) {
    let {s,m,h,d} = timeAgo;
    timeAgoStr = m ? h ? d ? `${d}d` : `${h}h` : `${m}m` : `${s}s`;
  }

  return (
    <div id={`notification-${toast ? 'toast' : 'dropdown'}-${notificationId}`} className={`hover:bg-secondary/25 border-l-2 ${statusClass} flex items-center justify-between py-1 px-3`} style={{transition: '0.3s ease-in-out opacity'}}>
      <div className="flex flex-col">
        <h3 className="text-sm">{title}</h3>
        <p className="text-xs" dangerouslySetInnerHTML={{__html: body}}></p>
        {
          timeAgoStr && <p className="text-xxs">{timeAgoStr} ago</p>
        }
        
      </div>
      <a onClick={(e) => deleteNotification(e, notificationId, toast)} className="cursor-pointer text-text-shade hover:text-text"><i className="bi bi-x-lg"></i></a>
    </div>
  )
}