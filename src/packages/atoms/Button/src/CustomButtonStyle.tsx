import { StyleSheet } from "react-native";
import { CustomButtonType } from "./CustomButtonType";

const styles= (props:CustomButtonType)=>
   StyleSheet.create({
    mainContainer:{
      display:'flex',
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:props.btnColor?(props.btnColor):('#0096FF'),
       width:props.btnSize=='small'?('44%'):('90%'),
       alignSelf:'center',
       height:40,
       borderRadius:8
    },
    fontStyle:{
       fontSize:props.btnSize=='small'?(14):(18),
       fontWeight:'600',
       color:props.titleColor?(props.titleColor):('#ffffff'),
    }
 })

 export default styles