import {easeInOut, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Gooy } from "./Gooy";
import webDev from '../assets/webDev.png'

export function Home(){

    

    return <>
    
    <div className="font font-bold text-9xl flex lg:flex-col justify-center items-center relative lg:h-[90vh] lg:min-h-[100vh] ">
        
        <motion.div 
        initial={{
            x:-800
        }}
        animate={{
            x:0
        }}
        transition={{
            duration:1.5,
            ease:"easeInOut"
        }}
        className="absolute z-10 lg:left-[150px] left-[80px] top-[28%] lg:top-0">
            <img src={webDev} alt="" className="lg:w-[60%] w-[75%] "/>
        </motion.div>
        <div className="font text-6xl lg:hidden relative h-[90vh] left-[10vh] ">
            <span className="font-semibold text-slate-500">Hey I’m </span> <br></br> 
             <span className="font-semibold text-slate-900">Kunal Sharma</span>
        </div>
        <div className="text-3xl absolute top-[70vh] lg:hidden mb-10">
            <span className="relative left-[-15%] text-3xl font-semibold text-slate-600">Full </span>
            <span className="relative left-[50%] text-3xl font-semibold text-slate-600">Stack</span> 
            <div className="flex justify-center items-center absolute flex-col left-[-6%]">
            <span className="text-3xl font-extrabold relative bottom-[-1.5vh] left-5   text-slate-900">Web</span>
            <span className="text-3xl font-extrabold relative bottom-[-1vh] left-5 text-slate-900">Developer</span>
            </div> 
        </div>

        <div className="lg:absolute lg:bottom-4 lg:right-20 lg:block hidden z-0 ">
            <Gooy />
        </div>
       
       <div className="absolute top-45 right-28 w-[1500px] pl-[350px] ">
        <div className="lg:flex gap-5 lg:font-bold lg:text-[100px] lg:relative lg:top-13 lg:w-full lg:z-50 hidden 
        "> Hey, I’m <AboutAnimation abouts={[" Kunal Sharma" , "Full"]}/>
        </div>
        <div className="lg:flex gap-5 lg:font-bold lg:text-slate-800 lg:text-[100px] lg:relative lg:top-[-20px] lg:z-50 hidden ">Hey, I’m  <AboutAnimation abouts={[" Kunal Sharma" , "Stack"]}/></div>
        <div className="lg:flex gap-5 lg:font-bold lg:text-[100px] lg:text-slate-600 lg:relative lg:top-[-40px] lg:z-30 hidden ">Hey, I’m  <AboutAnimation abouts={[" Kunal Sharma" , "Web Developer"]}/></div>
       </div>
        

        <div className="lg:absolute lg:top-[-60px] lg:left-20 lg:block hidden">
            <Gooy/>
        </div>
    </div>
    </>
}



function AboutAnimation ( {abouts} ){
    const letterDeley = 0.05
    const boxFadeDuration = 0.150
    const fadeDelay = 2
    const mainFadeDuration = 0.25
    const swapDelay = 2000
    

    const arr= [1,2,3,4,5]
    console.log(arr.length)

    const[aboutsIndex , setAboutsIndex] = useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setAboutsIndex((pv) => (pv + 1) % abouts.length)
        },swapDelay)

        return () => clearInterval(intervalId)
    })

    console.log(abouts[aboutsIndex].split(''))
    return <div className="">
        {abouts[aboutsIndex].split('').map((l,i)=>{
            return <motion.span
            initial={{
                opacity:1
            }}
            animate={{
                opacity:0
            }}
            transition={{
                delay:fadeDelay,
                duration: mainFadeDuration,
                ease:easeInOut
            }}
            className="relative"
            key={`${aboutsIndex}-${i}`}
            >
                <motion.span
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    delay: i * letterDeley,
                    duration: boxFadeDuration
                }}
                >{l}</motion.span>
                <motion.span 
                initial={{
                    opacity:0,
                }}
                animate={{
                    opacity:[0, 1, 0]
                }}
                transition={{
                    times:[0, 0.1, 1],
                    delay: i * letterDeley,
                    duration:boxFadeDuration,
                    ease:easeInOut
                }}
                className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950" />
            </motion.span>
        })}
    </div>
}