import { AddFeedCard } from "./AddFeedCard";
import { FeedCard } from "./FeedCard";


export function FeedListSideBar({ feedListData, setUserConfig }) {
  return (
    <section className="bg-primary/25 border-r border-r-accent flex items-center flex-col pb-[12px] min-w-[150px] max-w-[400px] w-3/12 h-[calc(100vh-50px)] overflow-auto resize-x">
      <h1 className="w-10/12 py-4 text-xxl">Feeds</h1>
      <div className="flex flex-col items-center w-full gap-4">
        <AddFeedCard setUserConfig={setUserConfig} />
        {feedListData.map(feedData => {
          return (
            <FeedCard key={feedData.feedId} {...feedData} />
          )
        })}
        <p className="text-sm text-text-shade">End of list.</p>
      </div>
    </section>
  )
}