import tools from '../src/data/tools.json'
import projects from '../src/data/projects.json'

const App = () => {

  const getHoverColor = (color)=>{
    const hbg = "hover:" + color
    return String(hbg)
  }


  return (
    <div className='text-white bg-zinc-900'>
      <div className='flex flex-col gap-14 mx-auto  md:w-3/4 w-full md:px-0 px-4 pt-10 pb-25'>

        <div className='flex flex-col gap-4'>
          <img src="/profile.jpg" className='bg-black size-20 rounded-lg border border-gray-400' alt='Profile' />
          <div className='text-gray-400 text-lg font-semibold'>
            Design + Code
          </div>
          <h1 className='md:text-7xl text-5xl  font-bold  md:text-shadow-sm text-shadow-black'>Gabriel JGB</h1>
          <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nulla incidunt aut autem obcaecati. Assumenda illum, illo id tempore odio cumque. Consectetur labore saepe dolores sapiente itaque eligendi quidem repellendus.</p>
        </div>

        <div className='flex flex-col gap-5'>
          <h2 className='font-semibold text-2xl'>Proyectos</h2>
          <div className='grid md:grid-cols-3 grid-cols-1 md:gap-7 gap-5'>
            {
              projects.map((project) => (
                <a
                  href={project.url}
                  target='_blank'
                  className={`rounded-lg bg-zinc-800 hover:bg-slate-800 transition-all cursor-pointer flex flex-col gap-3 p-5 md:pb-6`}
                >

                  <img src={`/${project.logo}.png`} className={`size-11 rounded-lg p-2 ${project.color}`} alt='Profile' />
                  <div className='font-semibold text-lg '>{project.name}</div>
                  <div className='text-sm text-gray-200'>{project.description}</div>

                </a>
              ))
            }
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-2xl'>Tecnologías y herramientas</h2>


          <div className='grid md:grid-cols-4 grid-cols-2 gap-3'>
            {
              tools.map((tool) => (
                <a href={tool.url} target='_blank' className='rounded-lg bg-zinc-800  hover:bg-zinc-700 transition-all cursor-pointer flex flex-row gap-3 items-center md:p-3 p-2'>
                  <img src={`/${tool.logo}.png`} className='size-6 rounded-lg' alt="Icon" />
                  <div className='font-semibold md:text-lg text-sm'>{tool.name}</div>
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