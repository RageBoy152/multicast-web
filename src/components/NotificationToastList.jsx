import { Notification } from './Notification';



export function  NotificationToastList({ notifications, setUserData }) {  
  return (
    <section className="absolute end-20 bottom-20 w-3/12 bg-primary drop-shadow-lg" style={{zIndex: '100'}}>
      {notifications.map(notification => !notification.toasted && <Notification key={notification.notificationId} {...notification} setUserData={setUserData} toast={true} />)}
    </section>
  )
}