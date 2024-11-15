import git from '../assets/tech-icons/github icon.webp'
import link from '../assets/tech-icons/linkedin.webp'
import insta from '../assets/tech-icons/insta.webp'
const menu = [

    {
        id:1,
        title:"Github",
        img:git
    },

    {
        id:2,
        title:"LinkedIn",
        img:link
    },

    {
        id:3,
        title:"Instagram",
        img:insta
    },

]


export const Context = ()=>{
    return <>
    <div>
        {menu.map((e)=>{
            return <div key={e.id} className='flex justify-center items-center gap-1 text-lg '>
                <img src={e.img} alt="" className='bg-black rounded-full w-6'/>
                <a href={`#${e.title}`} className="font-bold">{e.title}</a>
                
            </div>
        })}
    </div>
    </>

}