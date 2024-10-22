import React,{useState,useEffect} from "react";
import axios from 'axios'
import { StyleSheet,SafeAreaView,Text,Button, View } from "react-native";
import { DashBoardScreenTypes } from "./DashBoardScreenTypes";
import { getDataFromLocalStorage } from "../../storage/AsyncStorage";
import { useGetUserDetailsQuery } from "../../rtk/api/loginApi2";
import { getAllAsyncValues } from "../../storage/AsyncStorage";
 const DashBoardScreen:React.FC<DashBoardScreenTypes>=({title})=>{
 const[token,setToken]=useState<any>()
 const[refreshToken,setRefreshToken]=useState<any>()

 const[firstName,setFirstName]=useState<any>()
    const[lastName,setLastName]=useState<any>()
    const[email,setEmail]=useState<any>()
    const[userDetails,setUserDetails]=useState<any>()


 //console.log('TEST TOKEN.....',token)
 // data =   useGetUserDetailsQuery(token)
 useEffect(()=>{
   // console.log('ARZOO DATA.jjj...',data)
    getAllTokens()
   // console.log('TOKENS OUTSIDE',token)
    if(token!=''){
       // setToken(token)
  getUserDetails()
  console.log('TOKEN INSIDE...',token)
    }
 },[token])
// const getUserDetails= async()=>{
//     try{
//     const data =   useGetUserDetailsQuery(token)
//     console.log('USER DETAILS DATA.......',data)
//     }catch(error){
//         console.log('eeeeett...',error)
//     }
//     if(token){
//         //  const headers1={
//         //     'Content-Type': 'application/json',
//         //     'Authorization': `Bearer ${token}`
//         // }
//         console.log('inside IF conditions',token)
//         // const headers={
//         //     token:token
//         //    }
//            const data =   useGetUserDetailsQuery('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Mjk1NTk2MDcsImV4cCI6MTcyOTU2MTQwN30.RUMhLwZFaVRB9MTiLYKuyJv_4x3lEuM-MU9wFBOBhqM')
//            console.log('USER DETAILS DATA.......',data)
//     }
// }

const getUserDetails=async()=>{
    console.log('calling get user details....')
        
    const headers={
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
   let userDetails=await axios.get('https://dummyjson.com/auth//me',{
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

    const getAllTokens=async()=>{
        let accessToken:any=await getDataFromLocalStorage('ACCESS_TOKEN')
        let refreshToken:any= await getDataFromLocalStorage('REFRESH_TOKEN')
        setToken(accessToken.replaceAll('"',''))
        setRefreshToken(refreshToken.replaceAll('"',''))
    }
return(<SafeAreaView>
    <Text>{title}</Text>
    <Text>{`TOKEN:::${token}`}</Text>
         <Text>{`REFRESH_TOKEN:::${refreshToken}`}</Text>
   
    <Button 
    onPress={()=>{
        getUserDetails()
       // console.log('user details.......',data)
    }}
    title='Press Me!!'></Button>
    </SafeAreaView>)
}

export default DashBoardScreen