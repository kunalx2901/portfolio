import myImage from '../assets/myImage.jpeg'
import about from '../assets/information-app.png'
import {motion} from 'framer-motion'

export default function About(){

    

    return <>
    <div id='about' className='lg:max-h-[130vh] bg-black text-slate-100 p-10 relative'>
       
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
        duration:1.2,
        ease:'easeInOut'
    }}
    
    className='font-bold lg:text-6xl flex justify-center items-center lg:gap-5 gap-2 lg:mb-10 mb-5 text-3xl'>
        About
    <div>
        <img src={about} alt="" className='bg-white rounded-full top-0 w-5 lg:w-10'/>
    </div>
    </motion.div>

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
        duration:1.2,
        ease:'easeInOut'
    }}
    className='border-2 border-slate-200 py-5 lg:p-10 rounded-2xl lg:py-32 shadow-lg lg:shadow-xl lg:shadow-slate-400 shadow-slate-400 '>
    <div className='lg:flex lg:flex-row lg:justify-around lg:items-center flex flex-col justify-center items-center gap-7'>
        <img src={myImage} alt="" className='rounded-3xl lg:w-64 w-32 h-38 lg:h-80 hover:scale-110 duration-500 ease-in-out cursor-not-allowed'/>
        <div className='lg:w-[50%] lg:text-3xl text-sm font cursor-context-menu w-[84%]'>
        <p>
        I’m Kunal Sharma, a passionate web developer and tech enthusiast currently pursuing my B.Tech in Computer Science Engineering at CGC Landran. With a strong foundation in TypeScript, JavaScript, React, and databases like Postgres and Prisma ORM, I enjoy building responsive, user-centric applications. Right now, I’m working on projects like my personal blog application, where I can integrate creativity with robust technology. Known for my confidence and leadership skills, I’m always eager to learn, innovate, and tackle new challenges in the tech world.
        </p>
        </div>
       
    </div>
    <div>

    </div>
    </motion.div>
    </div>

    </>
}