import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Signup from './pages/Signup.jsx'
import firebaseConfig from './firebase.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/> ,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
