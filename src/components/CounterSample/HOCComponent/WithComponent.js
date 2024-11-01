import React,{useState} from "react";
import { StyleSheet,View,SafeAreaView } from "react-native";
import { WithComponentType } from "./WithComponentType";


const WithComponent=(OldComponent)=>{
    return function EnhancedComponent(props){
        const[count,setCount]=useState(0)
   return <OldComponent {...props} count={count} increamentCount={()=>{setCount(count+1)}}> </OldComponent>
  
    }
}
export default WithComponent
//let EnhancedComponent=WithComponent(OldComponent)