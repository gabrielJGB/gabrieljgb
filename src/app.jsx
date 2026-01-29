import React from 'react'

const App = () => {
  return (
    <div className='text-white'>
      <div className='flex flex-col gap-14 mx-auto  md:w-3/4 w-full md:px-0 px-4 mt-10 pb-25'>

        <div className='flex flex-col gap-5'>
          <div className='bg-black size-20 rounded-lg border border-gray-400'></div>
          <div className='text-gray-500 text-lg font-semibold'>
            Design + Code
          </div>
          <h1 className='md:text-7xl text-5xl  font-bold  md:text-shadow-2xl text-shadow-black'>Gabriel JGB</h1>
          <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla incidunt aut autem obcaecati. Assumenda illum, illo id tempore odio cumque. Consectetur labore saepe dolores sapiente itaque eligendi quidem repellendus.</p>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='font-semibold text-2xl'>Proyectos</h2>
          <div className='grid md:grid-cols-3 grid-cols-1 md:gap-7 gap-5'>
            {
              [1, 1, 1, 1, 1, 1].map(() => (
                <a href={"#"} target='_blank' className='rounded-lg bg-zinc-800 md:pb-20 hover:bg-zinc-700 transition-all cursor-pointer flex flex-col gap-3 md:p-5 p-5'>

                  <div className='bg-lime-700 size-10 rounded-lg'></div>
                  <div className='font-semibold text-lg '>Nombre Proyecto</div>
                  <div className='text-sm text-gray-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, eaque tempora officiis illum enim.</div>


                </a>
              ))
            }
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-2xl'>Tecnologías y herramientas</h2>


          <div className='grid md:grid-cols-4 grid-cols-2 gap-3'>
            {
              [1, 1, 1, 1, 1, 1].map(() => (
                <a href={"#"} target='_blank' className='rounded-lg bg-zinc-800  hover:bg-zinc-700 transition-all cursor-pointer flex flex-row gap-3 items-center md:p-3 p-2'>
                  <div className='bg-green-700 size-10 rounded-lg'></div>
                  <div className='font-semibold md:text-lg text-sm'>Tool Name</div>
                </a>
              ))
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default App