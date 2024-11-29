import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import img from '../assets/background.jpg'

export function Contact() {

  const [send , setSend] = useState(false)
  const [loading , setLoading] = useState(false)

    const form = useRef();

  const sendEmail = (e) => {
    setLoading(true)
    e.preventDefault();


    emailjs.sendForm('service_eweu2mc', 'template_zgtvyrd', form.current, {
        publicKey: 'DbvEwnoj0F4h2IRke',
      })
      .then(
        () => {
          setLoading(false)
          setSend(true)
          console.log('SUCCESS!');
          console.log('message sent !')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );}
    

    return <>
    <div className='relative'>
      <div className='absolute bottom-[-20%] w-screen '>
        <img src={img} alt="" className='w-full scale-y-75' /> 
      </div>
    <div className="font-bold text-xl h-[100vh] text-white bg-black  flex justify-between items-center pr-56" >
      <div className='pl-56 flex flex-col gap-5 z-20'>
      
       <div className='text-9xl font-bold inline-block'> Let's</div>
        
        <div className='text-9xl font-extrabold inline-block' >Connect</div> 
      </div>
       <div className="p-10 rounded-lg shadow-md flex flex-col gap-5 justify-center items-center z-20">
        <form ref={form} onSubmit={sendEmail} className=' flex flex-col gap-5 justify-center items-center border-2 px-10 py-16 rounded-lg shadow-lg shadow-white'>
            <label>Name</label>
            <input type="text" name="user_name" className=' text-black px-5 rounded-lg outline-none py-2 w-96'/>
            <label>Email</label>
            <input type="email" name="user_email" className=' text-black px-5 rounded-lg outline-none py-2 w-96'/>
            <label>Message</label>
            <textarea name="message" className=' text-black px-5 rounded-lg w-full outline-none py-2 h-full'/>
           {loading ? <div role="status">
            <button type="submit" className='bg-slate-500 px-6 text-lg cursor-pointer py-1 rounded-md' > 
                      <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                  </button>   
                  </div> : <button>{send ?  <button type="submit" className='bg-slate-500 px-6 text-lg cursor-pointer py-1 rounded-md' > 
                    Sent
                    </button> :  <button type="submit" className='bg-green-500 px-6 text-lg cursor-pointer py-1 rounded-md' > 
                      Send
                    </button>} </button>
                    }
           
            </form>
       </div>
    </div>
    </div>  
    </>
}