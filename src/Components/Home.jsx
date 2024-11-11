import { Gooy } from "./Gooy";
import webDev from '../assets/webDev.png'
// import motion from 'framer-motion'

export function Home(){
    return <>
    
    <div className="font font-bold text-9xl flex lg:flex-col justify-center items-center relative lg:h-[90vh] max-h-[100vh]">
        
        <div className="absolute z-10 lg:left-[150px] left-[80px]">
            <img src={webDev} alt="" className="lg:w-[60%] w-[75%]"/>
        </div>
        <div className="font text-6xl lg:hidden relative h-[90vh]">
            <span className="font-semibold text-slate-600">Hey</span> <br></br> 
             <span className="font-semibold text-slate-900">I'm Kunal Sharma</span>
        </div>
        <div className="text-3xl absolute top-[800px] lg:hidden mb-10">
            <span className="relative top-[-120px] left-[-29%] text-6xl font-semibold text-slate-600">Full </span>
            <span className="relative top-[-120px] left-[45%] text-6xl font-semibold text-slate-600">Stack</span> 
            <div className="flex justify-center items-center absolute bottom-[-10px] flex-col left-[-6%]">
            <span className="text-6xl font-extrabold text-slate-900">Web</span>
            <span className="text-6xl font-extrabold text-slate-900">Developer</span>
            </div>
        </div>

        <div className="lg:absolute lg:bottom-4 lg:right-20 lg:block hidden z-0 ">
            <Gooy />
        </div>
       
       <div className="absolute top-45 right-28">
       <div className="lg:block lg:font-bold lg:text-[110px] lg:relative lg:top-13 lg:z-50 hidden ">Hey, I'm Kunal Sharma
        </div>
        <div className="lg:block lg:font-bold lg:text-slate-800 lg:text-[110px] lg:relative lg:top-[-20px] lg:z-50 hidden ">Hey, I'm Kunal Sharma</div>
            <div className="lg:block lg:font-bold lg:text-[110px] lg:text-slate-600 lg:relative lg:top-[-40px] lg:z-30 hidden ">Hey, I'm Kunal Sharma</div>
       </div>
        

        <div className="lg:absolute lg:top-[-60px] lg:left-20 lg:block hidden">
            <Gooy/>
        </div>
    </div>
    </>
}