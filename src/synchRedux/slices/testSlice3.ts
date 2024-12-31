import { createSlice } from "@reduxjs/toolkit";
import { CreateApi } from "@reduxjs/toolkit/query";

const initialState={
    userId:'',
    id:''
}

const testSlice3=createSlice({
    name:'testSlice3',
    initialState,
    reducers:{
        saveUserCredentials:(state,action)=>{
            state.userId=action.payload.userId
            state.id=action.payload.id
        }
    }
})

const {reducer,actions}=testSlice3
export const {saveUserCredentials}=actions
export default reducer