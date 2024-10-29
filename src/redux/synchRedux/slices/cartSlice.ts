import { createSlice } from "@reduxjs/toolkit";
import { ProductList } from "../../../components/TabComponents/Product/ProductType";
const initialState={
   
    productListData:{
       productList:Array<ProductList>
    }
}
const cartSlice=createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
       
        saveProductList:(state,action)=>{
            state.productListData.productList=action.payload
          },
        
       
    }
})

 const{reducer,actions}=cartSlice
 export const {saveProductList}=actions
 export default reducer