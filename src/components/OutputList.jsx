import { toggleModal } from "../utils/toggleModal";
import { OutputCard } from "./OutputCard";


export function OutputList({ outputsData, setUserData }) {
  return (
    <section className="flex flex-col items-center w-full h-[calc(100vh-50px)] overflow-auto">
      <div className="w-10/12 py-4">
        <div className="text-xxl flex items-center justify-between">
          <h1>Outputs</h1>
          <p className="text-xs">
            MultiCast V2.0.2 | Developed by <a href="https://discord.com/users/693191740961718420" target='_blank' className="text-text-shade hover:text-text underline">Rage</a>
          </p>
        </div>
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