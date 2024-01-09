import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from '../components/Modal'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { EyeOff,  Eye } from 'lucide-react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Signup() {
    const auth = getAuth();
    let navigate=useNavigate()
    let [firstName,setFirstName]=useState();
    let [lastName,setLastName]=useState();
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let [firstNameerr,setFirstNameerr]=useState();
    let [lastNameerr,setLastNameerr]=useState();
    let [emailerr,setEmailerr]=useState();
    let [passworderr,setPassworderr]=useState();
    let [passwordShow,setPasswordShow]=useState(false)
    let [showmodal,setShowModal]=useState(false)
    let handle_first_name=(e)=>{
        setFirstName(e.target.value);
        setFirstNameerr()
    }
    let handle_last_name=(e)=>{
        setLastName(e.target.value);
        setLastNameerr()
    }
    let handle_email=(e)=>{
        setEmail(e.target.value);
        setEmailerr()
    }
    let handle_password=(e)=>{
        setPassword(e.target.value);
        setPassworderr()
    }
let handle_submit=()=>{
if(! firstName, !lastName, !email, !password){
    setFirstNameerr('First-Name is required !')
    setLastNameerr('Last-Name is required !')
    setEmailerr('Email is required !')
    setPassworderr('Password is required !')
}
else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email),  !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
    setEmailerr("This is not a mail addres !");
    setPassworderr("Password minimum eight length, one special character and one number !"  );
  }
  if(firstName && lastName && email && password && /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password))
  {
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    sendEmailVerification(auth.currentUser)
    .then(() => {     
        toast.success('Sign Up Successfully !', {
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
                navigate('/login')
            }, 3000);
        });
        
  })
  .catch((error) => {
    if(error.code.includes("auth/email-already-in-use")){

        setEmailerr("Email is already used !")
    }

  });
  }

}
  return (
    <div className="flex justify-between">
        <ToastContainer
position="top-center"
autoClose={3000}
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
      <div className="w-2/4">
        <div className="w-[495px] h-[62px] mt-[100px]">
            <div className="p-[20px] w-[495px]">

          <div className="h-[88px]">
            <input onChange={handle_first_name} className=" w-full h-[62px] border-[#D9D9D9] border-[1px] rounded-lg px-6 outline-[#80bdff]" type="text" placeholder="First name" />
         {firstNameerr && 
         <p className=" text-red-500">{firstNameerr}</p>
         }
          </div>
          <div className="h-[88px]">
            <input onChange={handle_last_name} className="w-full h-[62px] border-[#D9D9D9] border-[1px] rounded-lg px-6  outline-[#80bdff]" type="text" placeholder="Last name" />
            {lastNameerr && 
         <p className=" text-red-500">{lastNameerr}</p>
         }
          </div>
          <div className="h-[88px]">
            <input onChange={handle_email} className="w-full h-[62px] border-[#D9D9D9] border-[1px] rounded-lg px-6 outline-[#80bdff]" type="email" placeholder="Email Address or Phone Number" />
            {emailerr && 
         <p className=" text-red-500">{emailerr}</p>
         }
          </div>
          <div className="h-[88px] relative">
            <input onChange={handle_password} className="w-full h-[62px] border-[#D9D9D9] border-[1px] rounded-lg px-6 outline-[#80bdff]"
             type={passwordShow ? "text" : "password" } 
            placeholder="Password"
            value={password} />
            {passworderr && 
         <p className=" text-red-500">{passworderr}</p>
         }
         {passwordShow ? 
         < Eye onClick={()=>setPasswordShow(false)}  className=" absolute top-5 right-5" />  :  <EyeOff onClick={()=>setPasswordShow(true)} className=" absolute top-5 right-5" />
        }
       </div>
          <button onClick={handle_submit} className="text-white bg-color1 w-full py-4 rounded-xl mt-9 font-bold text-[20px] ">Sign Up</button>
       <div className="text-center mt-5">

       <Link onClick={()=>setShowModal(true)}  className="text-color1 font-medium text-[15px] underline text-center">Forgotten password?</Link>
       {showmodal &&
       
       <Modal onClose={()=> setShowModal(false)} />
       }
       </div>
       <div className="mt-10 text-center">
        <Link to={"/login"} className="text-[20px] font-bold text-white bg-color2 py-4 px-16  rounded-lg">Already have </Link>
       </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
