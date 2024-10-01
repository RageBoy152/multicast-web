import { OutputCardPreview } from "./OutputCardPreview";


export function OutputCard({ feeds, outputName }) {
  return (
    <div className="w-[500px]">
      <div className="bg-primary flex justify-between items-center px-3 py-2">
          <a href="#" className="h-min text-l"><i className="bi bi-box-arrow-up-right mr-1"></i> {outputName}</a>
      </div>
      <OutputCardPreview outputFeeds={feeds} outputName={outputName} />
      <div className="bg-primary flex gap-3 items-center px-3 py-2 text-l">
          <label className="h-min">Feeds:</label>
          <input type="number" value={feeds.length} className="bg-secondary w-[45px] text-center" />
      </div>
    </div>
  )
}