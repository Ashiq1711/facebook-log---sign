import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { EyeOff, Eye } from 'lucide-react';
function Login() {
let navigate=useNavigate()
    const auth = getAuth();
    let [showmodal,setShowModal]=useState(false)
let [email,setEmail]=useState()
let [password,setPassword]=useState()
let [error,setError]=useState()
let [PasswordShow,setPasswordShow]=useState(false)

let handle_email=(e)=>{
setEmail(e.target.value)
setError()
}
let handle_password=(e)=>{
    setPassword(e.target.value)
    setError()
}
let handle_log_in=()=>{
    if(!email, !password, !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email),!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)){
        setError("Sometihing is wrong !")
    }
if(email && password  && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email),/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)){
    signInWithEmailAndPassword(auth, email, password)
  .then((user) => {

    toast.success('Log in Successfully !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
            navigate('/home')
        }, 2000);

  })
  .catch((error) => {
  if(error.code.includes("auth/invalid-credential")){
    setError("Sometihing is wrong !")
  }
  });

}
}
  return (
    <div className='flex justify-between'>
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
             <div className="w-2/4 flex justify-end">
        <div className="mt-[130px] mr-[150px]">
          <img src="public/logo.png" alt="logo" />
          <p className="font-poppins ml-[50px] text-[22px]">
            Facebook helps you connect and share <br /> with the people in your
            life.
          </p>
        </div>
      </div>
        <div className='w-2/4'>
        <div className="w-[495px] h-[62px] mt-[100px]">
            <div className=' border-[1px] border-[#D9D9D9] p-[20px] rounded-lg shadow-2xl'>

          <div className="h-[88px]">
            <input onChange={handle_email} className=" w-full h-[62px] border-[#D9D9D9] border-[1px] rounded-lg px-6 outline-[#80bdff]" type="email" placeholder="Email Address or Phone Number" />
          </div>
          <div className="h-[88px] relative">
            <input onChange={handle_password} className=" w-full h-[62px] border-[#D9D9D9] border-[1px] rounded-lg px-6 outline-[#80bdff]"
             type={PasswordShow ? "text" : "password"}
              placeholder="Password"
              value={password} />
         {error && 
         <p className=' text-red-500'>{error}</p>
         }
         {PasswordShow ? 
         <Eye onClick={()=>setPasswordShow(false)} className=' absolute top-5 right-5' />
         :
         <EyeOff onClick={()=>setPasswordShow(true)} className=' absolute top-5 right-5' />
        }
          </div>
          <button onClick={handle_log_in} className="text-white bg-color1 w-full py-4 rounded-xl mt-9 font-bold text-[20px] ">Log In</button>
       <div className="text-center mt-5 border-b-2 pb-5 w-full">

       <Link onClick={()=>setShowModal(true)} className="text-color1 font-medium text-[15px] underline text-center ">Forgotten password?</Link>
       {showmodal &&
       
       <Modal onClose={()=> setShowModal(false)} />
       }

       </div>
       <div className="mt-10 pb-8 text-center">
        <Link to={"/"} className="text-[20px] font-bold text-white bg-color2 py-4 px-16  rounded-lg">Create New Account </Link>
       </div>
            </div>
            <div className='mt-10 text-center'>
                <p> <Link className=' underline font-bold'> Create a Page </Link>  for a celebrity, brand or business.</p>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Login