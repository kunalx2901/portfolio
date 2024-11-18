import git from '../assets/tech-icons/github icon.webp'
import link from '../assets/tech-icons/linkedin.webp'
import vercel from '../assets/tech-icons/vercelIcon.webp'
const menu = [

    {
        id:1,
        title:"Github",
        img:git,
        url:"https://github.com/kunalx2901"
    },

    {
        id:2,
        title:"LinkedIn",
        img:link,
        url:"https://www.linkedin.com/in/kunal-sharma-profile"
    },

    {
        id:3,
        title:"Vercel",
        img:vercel,
        url:"https://vercel.com/kunal-sharmas-projects"
    },

]


export const Context = ()=>{
    return <>
    <div className='flex flex-col text-3xl items-center justify-center gap-10 bg-slate-950 min-h-[107vh] absolute z-40 right-0 lg:w-[500px] w-[200px] top-0 '>
        
        {menu.map((e)=>{
            return <div key={e.id} className='grid grid-cols-2 gap-1 lg:text-4xl text-xl'>
                <div className=' flex justify-center items-center lg:w-10 w-5 lg:gap-4 gap-2'>
                    <img src={e.img} alt="" className='rounded-full w-10'/>
                    <a href={`${e.url}`} className="font-semibold text-white">{e.title}</a>
                </div>
                
            </div>
        })}
    </div>
    </>

}