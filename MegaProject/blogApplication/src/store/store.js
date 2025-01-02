import {  configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit';

import AuthReducer from './authSlice'


const rootReducer = combineReducers({
  auth : AuthReducer,
  // another: AnotherReducer // Add another reducer
})



const store = configureStore(
  {
    //reducers
    reducer: rootReducer,
    
  }
)
  
  
export default store;
