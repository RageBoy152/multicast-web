export function feedCardDragStart(e, feedId) {
  e.dataTransfer.setData('feedId', feedId);
}



export function feedCardDragOver(e) {
  e.preventDefault();
}



export function feedCardDrop(e, targetFeedId, inFeedList) {
  if (inFeedList) { e.preventDefault(); return; }   //  <- make this trigger when dropping from and to feed list

  if (targetFeedId == e.dataTransfer.getData('feedId')) { console.log("same feed, return"); return; }
  console.log("hi again")
}