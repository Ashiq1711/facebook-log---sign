import { createSlice } from '@reduxjs/toolkit'

export const userslice = createSlice({
  name: 'counter',
  initialState: {
    userinfo: localStorage.getItem('userdata') ? JSON.parse(localStorage.getItem('userdata') ) : "null",
  },
  reducers: {
    userloginfo: (state, action ) => {

      state.userinfo =  action.payload
    },

  }
})


export const {userloginfo} = userslice.actions

export default userslice.reducer