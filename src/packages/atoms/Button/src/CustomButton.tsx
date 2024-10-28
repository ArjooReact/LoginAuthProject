import React from "react";
import { TouchableOpacity,Text} from "react-native";
import { CustomButtonType } from "./CustomButtonType";
import styles from "./CustomButtonStyle";

const CustomButton:React.FC<CustomButtonType>=(props:CustomButtonType)=>{
   const {btnTitle,clickHandler}=props
   return(<TouchableOpacity 
     onPress={clickHandler}
     style={styles(props).mainContainer}>
    <Text style={styles(props).fontStyle}>{btnTitle}</Text>
   </TouchableOpacity>)
}

export default CustomButton