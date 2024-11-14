import data from '../data.jsx'
import { motion } from 'framer-motion'
import tech from '../assets/innovation.png'
export function Tech(){
    
    return <>
    <motion.div className="font-bold lg:text-6xl text-3xl h-[90vh] flex flex-col items-center lg:gap-24 gap-5 bg-black text-white">
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
        className="font-bold flex justify-center items-center gap-4">
            Tech Stack
            <div>
                <img src={tech} alt=""  className='lg:w-10 bg-white rounded-2xl'/>
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
            duration:1,
            ease:'easeInOut'
        }}
        className="grid grid-cols-3 lg:grid-cols-4 lg:w-[80%] w-[80%] py-15 border-2 border-slate-200 rounded-3xl p-7 lg:place-self-center lg:gap-10 gap-5 z-10 shadow-lg shadow-slate-200">
           {data.map((e)=>{
                return <>
                 <div className="flex flex-col justify-center items-center gap-2 ">
                 <img src={e.img} alt="" className="lg:w-14 w-8 rounded-lg"/>
                 <div className="lg:text-lg text-sm text-white font-bold ">{e.title}</div>
                </div>
                </>
           })}
        </motion.div>
        
    </motion.div>

    </>
} 