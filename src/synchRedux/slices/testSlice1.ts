import { createSlice } from "@reduxjs/toolkit";

let initialState={
    userName:'',
    passWord:''
}


const testSlice=createSlice({
    name:'testSlice',
    initialState,
    reducers:{
        saveState:(state,action)=>{
            state.userName=action.payload.userName,
            state.passWord=action.payload.passWord
        }
    }
})

const {reducer,actions}=testSlice
export const {saveState}=actions
export default reducer