import project from '../project'
import githubIcon from "../assets/tech-icons/github icon.webp"

export function Projects(){
    return <>
        <div className="font-bold text-6xl min-h-[100vh] flex flex-col items-center mb-12 gap-5">
            <div className="flex justify-center items-center mt-10">
                Projects
            </div>
        
        <div className='flex justify-center items-center flex-wrap lg:gap-20 mt-32 bg-purple-600'>
            {project.map((e)=>{
                return  <div key={e.id} className='w-[25%] text-xl font-bold border-2 border-slate-300 rounded-3xl lg:p-7 bg-black shadow-2xl shadow-zinc-800 text-white gap-10 z-10 hover:scale-90 duration-500 ease-in-out'>
                                <img src={e.img} alt="" className='rounded-xl mb-4'/>
                                <a href={e.link} target="_blank" rel="noreferrer noopener" >
                                <p className='text-3xl font-bold p-3 flex justify-center items-end'>{e.title}<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" className=' fill-white'/></svg> </p> 
                                <p className='text-lg font-semibold lg:p-3'>{e.detail}</p></a>
                            </div>
                     })}
       
        </div>

        <a href='https://github.com/kunalx2901' target="_blank" rel="noreferrer noopener">
        <button className='text-lg font-bold py-3 px-5 flex justify-center items-center mt-10 bg-black text-white rounded-2xl hover:scale-90 duration-500 ease-in-out '>More Projects on <img src={githubIcon} alt="" className='w-8 ml-2'/> 
        </button>
        </a>
        </div>
    </>
}