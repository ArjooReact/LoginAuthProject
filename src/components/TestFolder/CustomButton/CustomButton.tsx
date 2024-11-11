import React from "react";
import { StyleSheet,SafeAreaView,Text,View,TouchableOpacity } from "react-native";
import { CustomButtonTypes } from "./CustomButtonType";

const CustomButton:React.FC<CustomButtonTypes>=({title,onClickHandler})=>{
    return(<TouchableOpacity
    testID="customButton"
    onPress={onClickHandler}
     style={styles.mainContainer}>
     <Text>{title}</Text>
    </TouchableOpacity>)
}

const styles=StyleSheet.create({
    mainContainer:{
        width:180,
        height:40,
        borderRadius:8,
        backgroundColor:'skyblue',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default CustomButton

