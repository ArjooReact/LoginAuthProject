import React,{useState} from 'react'
import { StyleSheet,Button,SafeAreaView,Text } from 'react-native'
import { FirstCounterType } from './FirstCounterType'
import WithComponent from '../HOCComponent/WithComponent'

const FirstCounter:React.FC<FirstCounterType>=(props)=>{
    const {count,increamentCount}=props
    console.log('ggggg......',props)  
return(<SafeAreaView style={styles.mainContainer}>
    <Text>{count}</Text>
<Button
title='Increase First Counter'
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
export default WithComponent(FirstCounter)