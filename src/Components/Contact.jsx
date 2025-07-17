import React from 'react'
import { toast } from 'react-toastify';
import {motion} from "framer-motion"

const Contact=()=>{
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e7f29070-ea8e-491f-b754-924e80c81f3e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
     toast.success("Form Submitted Successfully");
      event.target.reset();
      setResult("Send Message")
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };

 return (
     <motion.div
     initial={{opacity:0,x:-200}} 
        transition={{duration:1.5}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}

     className='items-center w-full p-6 py-20 lg:px-32 overflow-hidden' id='Contact'>
         <h1 className='text-2xl sm:text-4xl mb-2 font-bold text-center'>Contact
             <span className='underline underline-offset-4 decoration-1 font-light under'> With us</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Ready to Make a Move ?Lets's Build your Future Together</p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>Your Name
                     <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
                     type="text" name='Name' placeholder='Your Name' required/>
                </div>

                <div className='w-full md:w-1/2 text-left md:pl-4' > Your Email
                     <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
                     type="email" name='Email' placeholder='Your Email' required/>
                </div>
               </div>
               <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
                 name="Message" placeholder="Message" required></textarea>
               </div>
               <div className='flex justify-center'>
                <button className='bg-blue-600 text-white rounded py-2 mb-10 px-12'>{result?result:"Send Message"}</button>
               </div>
               
        </form>
     </motion.div>
     
  );
};

export default Contact;