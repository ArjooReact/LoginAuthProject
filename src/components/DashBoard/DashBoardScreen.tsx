import React, { useState,useEffect } from "react";
import { StyleSheet,SafeAreaView,Text, View, Button } from "react-native";
import { DashBoardScreenTypes } from "./DashBoardScreenTypes";
import { getDataFromLocalStorage } from "../storage/AsyncStorage";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import axiosInstance from "../axiosInstance/AxiosInstance";


const DashBoardScreen:React.FC<DashBoardScreenTypes>=({title})=>{
   
    const[token,setToken]=useState<any>()
    const[refreshToken,setRefreshToken]=useState<any>()
    const[firstName,setFirstName]=useState<any>()
    const[lastName,setLastName]=useState<any>()
    const[email,setEmail]=useState<any>()
    const[userDetails,setUserDetails]=useState<any>()
   
    useEffect(()=>{
        getAllTokens()
        if(token){
       console.log('test tokenbb',token)
        getUserDetails()
        }
   
    },[token])

    const getAllTokens=async()=>{
        let accessToken:any=await getDataFromLocalStorage('ACCESS_TOKEN')
        let refreshToken:any= await getDataFromLocalStorage('REFRESH_TOKEN')
        setToken(accessToken.replaceAll('"',''))
        setRefreshToken(refreshToken.replaceAll('"',''))
    }

    const getUserDetails=async()=>{
        console.log('calling get user details....')
            
        const headers={
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
       let userDetails=await axiosInstance.get('/me',{
         headers:headers
       }).catch((error)=>{
           if(error.response.status===401){
            console.log('TOKEN EXPIRED.......')
           }
       })
       //console.log('USER_DETAILS......',userDetails)
       setUserDetails(userDetails)
       let firstName=JSON.parse(JSON.stringify(userDetails)).data.firstName
       let lastName=JSON.parse(JSON.stringify(userDetails)).data.lastName
       let email= JSON.parse(JSON.stringify(userDetails)).data.email
       setFirstName(firstName)
       setLastName(lastName)
       setEmail(email)
    }



return(<SafeAreaView style={styles.mainContainer}>
   <View style={styles.firstContainer}>
    <Text>{`AccessToken:::${token}`}</Text>
    <Text>{`RefreshToken:::${refreshToken}`}</Text>
   </View>
   <View style={styles.secondContainer}>
    <Text>{`FirstName::::${userDetails}`}</Text>
    <Text>{`LasttName::::${lastName}`}</Text>
    <Text>{`Email::::${email}`}</Text>
    <Button
    title="LOGOUT"
    onPress={()=>{
        console.log('clicked...')
       // navigation.navigate('DashBoard');
    }}
    ></Button>
   </View>
    </SafeAreaView>)
}

const styles= StyleSheet.create({
    mainContainer:{
        display:'flex',
      flex:1
    },
    firstContainer:{
        display:'flex',
        flex:.5,
        backgroundColor:'skyblue'
    },
    secondContainer:{
        display:'flex',
        flex:.5
    }
})

export default DashBoardScreen