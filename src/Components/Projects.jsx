import project from '../project'
import githubIcon from "../assets/tech-icons/github icon.webp"
import {motion} from 'framer-motion'
import projectIcon from '../assets/logo-project.png';

export function Projects(){
    // const width = window.innerWidth;
    // const height = window.innerHeight;

    // console.log(width,height)
    return <>
        <div id='projects' className="font-bold lg:text-6xl text-3xl min-h-[90vh] lg:min-h-[105vh] flex flex-col items-center lg:mb-12 lg:gap-5 ">
            <motion.div 
            initial={{
                y:100,
                opacity:0
                
            }}
            whileInView={{
                y:0,
                opacity:1
               
            }}
            transition={{
                duration:1,
                ease:'easeInOut'
            }}
            className="flex flex-col justify-center items-center mt-10 ">
               <div className='flex gap-2 justify-center items-center'>
               Projects
               <img src={projectIcon} alt="" className='lg:w-16 w-8'/>
               </div>
            <div className='lg:hidden text-xl font-bold text-slate-600'>
                (Use Desktop For Better Experience)
            </div>
            </motion.div>

        
        <div className='lg:flex grid grid-cols-1 lg:pl-0 pl-[10%] lg:justify-center lg:items-center lg:flex-wrap lg:gap-20 lg:mt-24 mt-10 gap-8'>
            {project.map((e)=>{
                if(window.innerWidth<500 && window.innerHeight<800){
                    while(e.id>1){
                        return  <div key={e.id} className='lg:w-[25%] w-[90%] p-3 lg:text-xl font-bold border-2 border-slate-300   rounded-3xl lg:p-7 bg-black shadow-2xl shadow-slate-900 text-white lg:gap-10 z-10 hover:scale-90 duration-500 ease-in-out '>
                <img src={e.img} alt="" className='rounded-2xl mb-4 lg:p-0 p-2 '/>
                <a href={e.link} target="_blank" rel="noreferrer noopener" >
                <p className='lg:text-3xl text-2xl font-bold lg:p-3 flex justify-center items-end'>{e.title}<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" className=' fill-white'/></svg> </p> 
                <p className='lg:text-lg text-sm font-semibold lg:p-3 py-3 px-2'>{e.detail}</p></a>
             </div>
                    }
                }

            else {
                return  <div key={e.id} className='lg:w-[25%] w-[90%] p-3 lg:text-xl font-bold border-2 border-slate-300   rounded-3xl lg:p-7 bg-black shadow-2xl shadow-slate-900 text-white lg:gap-10 z-10 hover:scale-90 duration-500 ease-in-out '>
                <img src={e.img} alt="" className='rounded-2xl mb-4 lg:p-0 p-2 '/>
                <a href={e.link} target="_blank" rel="noreferrer noopener" >
                <p className='lg:text-3xl text-2xl font-bold lg:p-3 flex justify-center items-end'>{e.title}<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" className=' fill-white'/></svg> </p> 
                <p className='lg:text-lg text-sm font-semibold lg:p-3 py-3 px-2'>{e.detail}</p></a>
             </div>
            }
            })}
       
        </div>

        <a href='https://github.com/kunalx2901' target="_blank" rel="noreferrer noopener">
        <button className='lg:text-lg font-bold lg:py-3 lg:px-5 flex justify-center items-center lg:mt-10 bg-black text-white rounded-2xl hover:scale-90 duration-500 ease-in-out text-sm py-2 px-3 m-10'>More Projects on <img src={githubIcon} alt="" className='lg:w-8 w-6 ml-2'/> 
        </button>
        </a>
        </div>
    </>
}
