import { useState } from 'react';
import { Context } from './Context';
import { AnimatePresence, motion} from 'framer-motion'
import { menuSlide } from '../anim';

const BurgerButton = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    
  };


  return (
    <div>
      <button
      className="flex flex-col z-50 space-y-1.5 p-2 focus:outline-none"
      onClick={toggleOpen}
    >
      <div
        className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
          open ? 'opacity-0 rotate-45 translate-y-1.5' : ''
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
          open ? 'opacity-0' : ''
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
          open ? 'opacity-0 -rotate-45 -translate-y-1.5' : ''
        }`}
      >
      </div>  
    </button>

    {open ? 
    
    
    <AnimatePresence>
    <motion.div 

    variants={menuSlide}
    animate="enter"
    exit="exit"
    initial="initial"

    className="flex flex-col z-50 lg:h-[107vh] absolute top-0 right-0">
      <motion.button
    
      className="flex flex-col z-50 space-y-1.5 p-2 focus:outline-none relative top-8 right-10 " onClick={toggleOpen} ><div
        className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
          open ? 'rotate-45 translate-y-1.5 bg-white' : 'bg-black'
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
          open ? 'opacity-0' : ''
        }`}
      ></div>
      <div
        className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
          open ? '-rotate-45 -translate-y-2.5 bg-white' : 'bg-black'
        }`}
      >
      </div> </motion.button>
      <Context/>
    </motion.div>
    </AnimatePresence>
      : null}
      

    </div>
  );
};

export default BurgerButton;