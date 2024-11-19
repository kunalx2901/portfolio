import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eweu2mc', 'template_6rmm9da', form.current, {
        publicKey: 'DbvEwnoj0F4h2IRke',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('message sent !')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );}
    

    return <>
    <div className="font-bold text-xl h-[100vh] text-white bg-black  flex justify-center items-center z-0">
       <div className="p-10 rounded-lg shadow-md flex flex-col gap-5 justify-center items-center">
        <form ref={form} onSubmit={sendEmail} className=' flex flex-col gap-5 justify-center items-center'>
            <label>Name</label>
            <input type="text" name="user_name" className=' text-black px-2 '/>
            <label>Email</label>
            <input type="email" name="user_email" className=' text-black px-2 '/>
            <label>Message</label>
            <textarea name="message" className=' text-black  px-2 '/>
            <input type="submit" value="Send" />
            </form>
       </div>
    </div>  
    </>
}