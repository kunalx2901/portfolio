import myImage from '../assets/myImage.jpeg'
import about from '../assets/information-app.png'

export default function About(){
    return <>
    
    <div className='lg:h-[90vh] bg-black text-slate-100 p-10 relative'>
       
    <div className='font-bold text-6xl flex justify-center items-end gap-5 mb-10'>
        About
    <div>
        <img src={about} alt="" className='bg-white rounded-full relative top-[-10px]'/>
    </div>
    </div>

    <div className='border-2 border-slate-200 py-16 lg:p-10 rounded-2xl lg:py-32 shadow-lg lg:shadow-xl lg:shadow-slate-400 shadow-slate-400'>
    <div className='lg:flex lg:flex-row lg:justify-around lg:items-center flex flex-col justify-center items-center  gap-7'>
        <img src={myImage} alt="" className='rounded-3xl lg:w-64 w-48 h-64 lg:h-80 hover:scale-110 duration-500 ease-in-out cursor-not-allowed'/>
        <div className='lg:w-[50%] lg:text-3xl text-lg font cursor-context-menu w-[64%]'>
        <p>
        I’m Kunal Sharma, a passionate web developer and tech enthusiast currently pursuing my B.Tech in Computer Science Engineering at CGC Landran. With a strong foundation in TypeScript, JavaScript, React, and databases like Postgres and Prisma ORM, I enjoy building responsive, user-centric applications. Right now, I’m working on projects like my personal blog application, where I can integrate creativity with robust technology. Known for my confidence and leadership skills, I’m always eager to learn, innovate, and tackle new challenges in the tech world.
        </p>
        </div>
       
    </div>
    <div>

    </div>
    </div>
    </div>

    </>
}