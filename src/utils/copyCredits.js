export function copyCredits(userData, setUserData, outputNamePassed, feedIdPassed) {
  let feedElem = feedIdPassed ? { id: feedIdPassed } : $('.feedCardActive')[0];
  let outputName = outputNamePassed ? outputNamePassed : feedElem.dataset.outputname;

  let feedObj = !outputName ? userData.feedList.find(feedObj => feedObj.feedId == feedElem.id) : userData.outputs.find(outputObj => outputObj.outputName == outputName).feeds.find(feed => feed.feedId == feedElem.id);
  
  navigator.clipboard.writeText(`[ Credits: [${feedObj.feedName}](<https://youtube.com/watch?v=${feedObj.videoId}>) ]`);

  let newNotificationObj = {
    notificationId: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    title: `Copied credits for feed '${feedObj.feedName}'`,
    status: 'success'
  }

  setUserData((currentData) => ({
    ...currentData,
    notifications: [newNotificationObj, ...currentData.notifications]
  }))
}