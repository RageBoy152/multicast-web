import { FeedCard } from "./FeedCard";

export function OutputCardPreview({ outputFeeds, outputName }) {
  //  define height and flex basis classes depending on feed count

  let outputPreviewClassNameProps = {
    heightClass: outputFeeds.length > 2 && outputFeeds.length < 7 ? 'h-1/2' : outputFeeds.length > 6 ? 'h-1/3' : 'h-full',
    basisClass: outputFeeds.length > 4 ? 'basis-1/3' : 'basis-1/2'
  }


  return (
    <div className="bg-accent aspect-video flex flex-wrap">
      {outputFeeds.map((outputFeed, i) => {
        if (outputFeed.feedId) {
          //  return feed card with preview mode
          return (
            <FeedCard key={outputFeed.feedId} {...outputFeed} {...outputPreviewClassNameProps} outputName={outputName} />
          )
        }
        else {
          //  no feed here: return outputLetter - feedIndex
          return (
            <div key={i} className={`bg-accent aspect-video border flex justify-center items-center border-primary ${outputPreviewClassNameProps.basisClass} ${outputPreviewClassNameProps.heightClass} flex-grow`}>
              <p className="text-sm">{outputName.split('Output ')[1]} - {i+1}</p>
            </div>
          )
        }
        
      })}
    </div>
  )
}