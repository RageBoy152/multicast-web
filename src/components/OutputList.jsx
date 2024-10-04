import { toggleModal } from "../utils/toggleModal";
import { OutputCard } from "./OutputCard";


export function OutputList({ outputsData, setUserData }) {
  return (
    <section className="flex flex-col items-center w-full h-[calc(100vh-50px)] overflow-auto">
      <div className="w-10/12 py-4">
        <h1 className="text-xxl">Outputs</h1>
        <a onClick={() => toggleModal('limited-features-modal-container')} className="mb-4 underline text-text-shade hover:text-text text-xs cursor-pointer">Why are some features disabled?</a>
      </div>

      <div className="flex justify-center gap-10 pb-6 px-20 flex-wrap">
        {outputsData.map(outputData => {
          return (
            <OutputCard key={outputData.outputId} {...outputData} setUserData={setUserData} />
          )
        })}
      </div>
    </section>
  )
}