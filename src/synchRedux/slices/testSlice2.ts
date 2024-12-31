import { createSlice } from "@reduxjs/toolkit";

let initialState={
    address:'',
    city:''
}

const test2Slice=createSlice({
    name:'testSlice2',
    initialState,
    reducers:{
        saveAddress:(state,action)=>{
          state.address=action.payload.address
          state.city=action.payload.city
        }
    }
})

const {reducer,actions}=test2Slice
export const {saveAddress}=actions
export default reducer