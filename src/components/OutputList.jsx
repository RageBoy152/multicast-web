import { OutputCard } from "./OutputCard";


export function OutputList({ outputsData }) {
  return (
    <section className="flex flex-col items-center w-full h-[calc(100vh-50px)] overflow-auto">
      <h1 className="w-10/12 py-4 text-xxl">Outputs</h1>
      <div className="flex justify-center gap-10 pb-6 px-20 flex-wrap">
        {outputsData.map(outputData => {
          return (
            <OutputCard key={outputData.outputId} {...outputData} />
          )
        })}
      </div>
    </section>
  )
}