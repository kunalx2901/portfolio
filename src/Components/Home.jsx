import {easeInOut, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Gooy } from "./Gooy";
import webDev from '../assets/webDev.png'

export function Home(){


    return <>
    <div id="home" className="font font-bold text-9xl flex lg:flex-col justify-center min-h-fit items-center relative lg:h-[90vh] lg:min-h-[95vh] z-10 ">
        
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
        className="absolute z-10 lg:left-[150px] left-[60px] top-[26%] lg:top-[-5%]">
            <img src={webDev} alt="" className="lg:w-[60%] w-[80%] "/>
        </motion.div>
        <div className="font text-6xl lg:hidden relative h-[90vh] left-[10%] top-5">
            <span className="font-semibold text-slate-500">Hey I’m </span> <br></br> 
            <div className="text-5xl font-semibold absolute right[-10%] w-[400px]">
            <AboutAnimation abouts={[" Kunal Sharma " , "Full Stack " , ""]}/>
            
            </div>
            <div className="text-4xl font-semibold relative right[-10%] top-12 w-[400px]">
            <AboutAnimation abouts={["" , "Web Developer" ,""]}/>
            </div>
          
        </div>
        

        <div className="lg:absolute lg:bottom-4 lg:right-20 lg:block hidden z-0 ">
            <Gooy />
        </div>
       
       <div className="absolute top-[25vh] right-28 w-[1500px] pl-[350px] ">
        <div className=" lg:flex gap-5 lg:font-bold lg:text-[100px] lg:relative lg:top-13 lg:w-full lg:z-50 hidden 
        "> Hey, I’m <AboutAnimation abouts={[" Kunal Sharma","Full Stack",""]}/>        
        </div>
        <div className="lg:flex gap-5 lg:font-bold lg:text-slate-800 lg:text-[90px] lg:relative lg:left-[390px] lg:top-[-2px] lg:z-50 hidden "><AboutAnimation abouts={[" " , "Web Developer" ," "]}/>
        </div>
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
    
    const[aboutsIndex , setAboutsIndex] = useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setAboutsIndex((pv) => (pv + 1) % abouts.length)
        },swapDelay)

        return () => clearInterval(intervalId)
    })

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