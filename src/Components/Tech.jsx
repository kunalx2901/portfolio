import data from '../data.jsx'
import { motion } from 'framer-motion'
import tech from '../assets/innovation.png'
import { Gooy } from './Gooy.jsx'
export function Tech(){
    
    return <>
    <motion.div className="font-bold text-6xl h-[90vh] flex flex-col items-center lg:gap-24 gap-1 bg-black text-white">
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
        className="font-bold flex justify-center items-end gap-2">
            Tech Stack
            <div>
                <img src={tech} alt=""  className='w-10 relative top-[-10px]'/>
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
        className="grid grid-cols-2 lg:grid-cols-4 w-[80%] border-2 border-slate-200 rounded-3xl p-7 place-self-center gap-10 z-10 ">
           {data.map((e)=>{
                return <>
                 <div className="flex flex-col items-center gap-2 ">
                 <img src={e.img} alt="" className="w-14 rounded-lg"/>
                 <div className="text-lg text-white font-bold">{e.title}</div>
                </div>
                </>
           })}
        </motion.div>
        
    </motion.div>

    </>
} 