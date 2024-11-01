import React,{useEffect,useState} from "react";
import { StyleSheet,SafeAreaView,Text,View } from "react-native";
import { ProfileScreenType } from "./ProfileScreenType";
//import { useEffect } from "react";
import WithComponent from "../FetchApiHOC/FetchData";
import WithAuthorization from "../CounterSample/HOCComponent/WithAuthorization";
const ProfileScreen:React.FC<ProfileScreenType>=({response,userChecking})=>{
  const[data,setData]=useState()
  //const[type,setType]=useState<any>(user)
    // useEffect(()=>{
    //   fetchData()
      
    // },[])
    // const fetchData= async ()=>{
    //     let response= await fetch('https://fakestoreapi.com/products').then(res=>res.json()).then((response)=>{
    //         //console.log('Final rse=====>',response)
    //         setData(response)
    //         return response
    //     })
    // }
    return(
    <SafeAreaView style={styles.mainContainer}>
        {!userChecking?(<Text>Checking.....</Text>):(<View>
            <Text>User Is Authorised</Text>
            <Text>Welcome To Profile Screen</Text>
            <Text>{JSON.stringify(response)}</Text>
        </View>)}
  
    </SafeAreaView>)
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})
//export default WithComponent(ProfileScreen,'https://fakestoreapi.com/products')
export default WithAuthorization(ProfileScreen,'admin')