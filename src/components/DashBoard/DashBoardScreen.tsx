import React, { useState,useEffect, Component } from "react";
import { StyleSheet,SafeAreaView,Text,Button,View } from "react-native";
import { DashBoardScreenTypes } from "./DashBoardScreenTypes";
import FirstCounter from "../CounterSample/FirstCounter/FirstCounter";
import SecondCounter from "../CounterSample/SecondCounter/SecondCounter";
import WithLoading from "../CounterSample/HOCComponent/WithLoading";
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import WithComponent from "../FetchApiHOC/FetchData";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";
const DashBoardScreen:React.FC<DashBoardScreenTypes>=({title,response,isLoading})=>{
    const[data,setData]=useState()
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    // useEffect(()=>{
    //  // fetchData()
    // },[])
    // const fetchData= async ()=>{
    //     let response= await fetch('https://fakestoreapi.com/products/1').then(res=>res.json()).then((response)=>{
    //         //console.log('Final rse=====>',response)
    //         setData(response)
    //         return response
    //     })
    // }
return(<SafeAreaView>
    {!isLoading?(<Text>Loading....</Text>):(<View>
        <Text>{JSON.stringify(response)}</Text>
    {/* <FirstCounter></FirstCounter>
    <SecondCounter></SecondCounter> */}
    <Button
    title="Navigate To ProfileScreen"
    onPress={()=>{
        navigation.navigate('ProfileScreen')
    }}
    ></Button>
    </View>)}
   
    </SafeAreaView>)
}

//export default WithComponent(DashBoardScreen,'https://fakestoreapi.com/products/1')
export default WithLoading(DashBoardScreen)

/// USE CASE OF HOC
// 1)Writing Common Code Logics like counterEvent
// 2)Writing Common Logger Component
// 3)Writing Common DataFetch Component
// 4)For Conditional Rendering
// 5)Writing Common Loader Class