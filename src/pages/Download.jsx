import '../download.css'

export default function Download() {
  return (
    <div className="h-screen flex flex-col gap-10 items-center justify-center" id='container-bg'>
      
      <div className="w-10/12 max-w-[1300px] flex gap-3 justify-between items-center flex-col-reverse lg:items-end lg:flex-row lg:gap-0">
        <h1 className='text-[60px]'>MultiCast
          <span className='text-base text-text-shade'>V2.0.1</span>
        </h1>
        <img src="output-ui-screenshot.png" id='cta' className='w-11/12 lg:w-7/12' />
      </div>
      
      
      <div className="w-10/12 max-w-[1300px]">
        <h2 className='text-xl'>Watch SpaceX build and test their Starship vehicle from every angle.</h2>
        <h2 className="text-base text-text-shade"><i className="bi bi-broadcast-pin"></i> Starbase, Tx</h2>

        <div className="flex mt-6 gap-8 justify-center lg:justify-start lg:mt-4">
          <a className='text-xl bg-body hover:bg-body/90 transition-colors ease-in-out duration-150 px-10 py-2' id='cta' href="https://github.com/RageBoy152/multicast/releases/download/2.0.1/Multi-Cast-Setup-2.0.1.exe" target='_blank'>Download</a>
          <a className='text-xl bg-body hover:bg-body/75 transition-colors ease-in-out duration-150 px-4 py-2' href="https://github.com/RageBoy152/multicast" target='_blank'><i className="bi bi-github"></i></a>
        </div>
      </div>
    </div>
  )
}