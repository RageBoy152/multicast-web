import { OutputCardPreview } from "./OutputCardPreview";
import { Link } from 'react-router-dom'


export function OutputCard({ feeds, outputName, outputId }) {
  return (
    <div className="w-[500px]">
      <div className="bg-primary flex justify-between items-center px-3 py-2">
          <Link to={`/output?outputId=${outputId}`} target="_blank" className="h-min text-l"><i className="bi bi-box-arrow-up-right mr-1"></i> {outputName}</Link>
      </div>
      <OutputCardPreview outputFeeds={feeds} outputName={outputName} />
      <div className="bg-primary flex gap-3 items-center px-3 py-2 text-l">
          <label className="h-min">Feeds:</label>
          <input type="number" value={feeds.length} className="bg-secondary w-[45px] text-center" />
      </div>
    </div>
  )
}