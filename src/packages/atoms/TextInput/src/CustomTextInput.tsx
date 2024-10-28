import React from "react";
import { CustomTextInput } from "./CustomTextInputType";
import { SafeAreaView,StyleSheet,TextInput, useWindowDimensions } from "react-native";

const CustomTextInputType:React.FC<CustomTextInput>=({value,placeholder,placeholderTextColor,onChangeTextHandler})=>{
return(<TextInput
style={styles.mainInputStyle}
value={value}
placeholder={placeholder}
placeholderTextColor={placeholderTextColor}
onChangeText={onChangeTextHandler}
>
</TextInput>)
}

const styles=StyleSheet.create({
    mainInputStyle:{
        width:'90%',
        borderWidth:1,
        borderColor:'blue',
        height:40,
        borderRadius:8,
        marginTop:20
    }
})
export default CustomTextInputType