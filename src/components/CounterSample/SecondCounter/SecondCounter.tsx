import React,{useState} from "react";
import { StyleSheet,Button,SafeAreaView,Text } from "react-native";
import { SecondCounterType } from "./SecondCounterType";
import WithComponent from "../HOCComponent/WithComponent";

const SecondCounter:React.FC<SecondCounterType>=(props)=>{
  //  const [count,setCount]=useState<number>(0)  
    const {count,increamentCount}=props
    return(<SafeAreaView style={styles.mainContainer}>
     <Text>{count}</Text>
<Button
title='Increase Second Counter'
onPress={increamentCount}
></Button>
    </SafeAreaView>)
}

const styles=StyleSheet.create({
    mainContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default WithComponent(SecondCounter)