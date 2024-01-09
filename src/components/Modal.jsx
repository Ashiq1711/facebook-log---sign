import React, { useRef, useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { X } from 'lucide-react';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function Modal({onClose}) {
    let modalRef= useRef();
    let closeModal=(e)=>{
if(modalRef.current===e.target){
    onClose()
}
    }
    let [loder,setLoder]=useState(false)
let [email,setEmail]=useState()

    let handle_email=(e)=>{
setEmail(e.target.value)
    }

    let handle_reset=()=>{
       const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    setLoder(true)
    toast.info('Check Your Email !', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
       setTimeout(() => {
        onClose()
       }, 4000);

  })
  .catch((error) => {

  });
 
    }



  return (
    <div ref={modalRef} onClick={closeModal} className=' fixed bg-black bg-opacity-30  inset-0 backdrop-blur-sm flex justify-center items-center'>
       <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{loder ? 
<div><img className=' rounded-xl ' src="public/done.gif" alt="" /></div>
:

        <div className='flex flex-col gap-2 text-white'>
            <button onClick={onClose} className=' place-self-end text-[22px] hover:bg-red-500 hover:rounded-full'> <X size={35}/> </button>
        <div className=' bg-indigo-600 rounded-xl px-20 py-10 flex flex-col items-center'>
            <h1 className='text-[25px] py-3 font-poppins'> Reset Pssword</h1>
            
            <input onChange={handle_email} className='w-[260px] h-12 rounded-md px-3 text-black outline-none' type="email" placeholder='Enter your valid email'/>
           
          
            
             <button onClick={handle_reset} className=' bg-black py-3 px-4 rounded-lg font-poppins font-semibold mt-4'>Submit</button>
            
        </div>
        </div>
}
    </div>
  )
}

export default Modal