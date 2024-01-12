import { configureStore } from '@reduxjs/toolkit'
import  userloginfo  from './slice/userslice'

export default configureStore({
  reducer: {
    userloginfo: userloginfo,
  }
})