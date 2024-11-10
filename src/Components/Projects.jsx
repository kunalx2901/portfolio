import sundown from '../assets/sundown.png'

export function Projects(){
    return <>
        <div className="font-bold text-6xl h-[100vh]">
            <div className="flex justify-center items-center mt-10">
                Projects
            </div>
        
        <div className='flex justify-center items-center gap-20 mt-32'>
            <div className='w-[25%] text-xl font-bold border-2 border-slate-300 rounded-3xl p-7 bg-black shadow-2xl shadow-zinc-800 text-white gap-10 z-10 '>
                <img src={sundown} alt="" className='rounded-xl mb-4'/>
                 <a href="https://bubble-game-project01.vercel.app/" target="_blank" rel="noreferrer noopener" className=""><p className='text-3xl font-bold p-3 flex justify-center items-end'>Sundown <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" className=' fill-white'/></svg> </p> </a>
                <p className='text-lg font-semibold p-3'>Sundown is a dynamic, feel-good frontend website built using GSAP, HTML, Tailwind, and JavaScript. It showcases smooth, engaging animations that elevate user experience, making it visually captivating. Designed for a seamless blend of modern web design and fluid interactions, Sundown highlights creativity and technical expertise in frontend development.</p>
            </div>
       
        </div>
        </div>
    </>
}