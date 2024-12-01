import {  configureStore } from '@reduxjs/toolkit'

import AuthReducer from './authSlice'



const store = configureStore(
  {
    //reducers
    reducer: AuthReducer,
  }
)


export default store;
