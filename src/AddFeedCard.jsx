export function AddFeedCard({ setUserConfig }) {
  function addFeed() {
    let newFeedObj = {
      feedId: crypto.randomUUID(),
      feedName: "Testing 123",
      videoId: "c212qMUTnEs",
      volume: 50,
    }


    setUserConfig((currentConfig) => ({
      ...currentConfig,
      feedList: [newFeedObj, ...currentConfig.feedList]
    })
  )
  }


  
  return (
    <div onClick={addFeed} className="w-9/12 aspect-video border border-text flex items-center justify-center hover:bg-text/10 cursor-pointer text-text-shade hover:text-text">
      <i className="bi bi-plus text-xxl"></i>
    </div>
  )
}