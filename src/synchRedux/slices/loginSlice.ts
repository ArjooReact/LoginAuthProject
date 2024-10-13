import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userName:'',
    passWord:''
}
const loginSlice=createSlice({
    name:'loginSlice',
    initialState,
    reducers:{
        saveUserName:(state,action)=>{
          state.userName=action.payload
        },
        savePassword:(state,action)=>{
            state.passWord=action.payload
        }
    }
})

 const{reducer,actions}=loginSlice
 export const {saveUserName,savePassword}=actions
 export default reducer