import { createSlice } from "@reduxjs/toolkit";

const initialState={
   // userName:'',
    //passWord:'',
    userData:{
        userName:'',
        userPassword:''
    }
}
const loginSlice=createSlice({
    name:'loginSlice',
    initialState,
    reducers:{
        // saveUserName:(state,action)=>{
        //   state.userName=action.payload
        // },
        // savePassword:(state,action)=>{
        //     state.passWord=action.payload
        // },
        saveUserName:(state,action)=>{
            state.userData.userName=action.payload
          },
          savePassword:(state,action)=>{
              state.userData.userPassword=action.payload
          },
        // saveUserData:(state,action)=>{
        //     state.userData=action.payload
        // }
    }
})

 const{reducer,actions}=loginSlice
 export const {saveUserName,savePassword}=actions
 export default reducer