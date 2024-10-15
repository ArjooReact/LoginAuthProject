import React,{useEffect,useState} from "react";
import { StyleSheet,SafeAreaView,Text, View, Button } from "react-native";
import { DashBoardScreenTypes } from "./DashBoardScreenTypes";
import { getDataFromLocalStorage,clearAsyncStorage,saveDataInLocalStorage } from "../../storage/AsyncStorage/AsyncStorage";
import axiosInstance from "../../api/AxiosInstance";

const DashBoardScreen:React.FC<DashBoardScreenTypes>=({title})=>{
const[token,setToken]=useState<any>()
const[refreshToken,setRefreshToken]=useState<any>()
const[userDetails,setUserDetails]=useState<any>()
    useEffect(()=>{
        console.log('calling useEffect....')
        getAccessToken()
        getRefreshToken()
        // STEP=>1 This is the direct call for UserDetails so here there is a chance of getting Error
        //Initially AsyncStorage will take some time to give AccessToken as Async Storage
        //gives Promise so it will execute the code without AccessToken and gives error as Invalid token
        //So once promise get resolved inside the useState of Token is filled i.e setToken
        //as we pass useState token inside dependency array [token] so again getUseDetails()
        //function is called which is not good as user perspective. So whenever will navigate
        //to Dashboard page twice the userDetails method is called one withot access token
        //and other is is with access token so will follow STEP==>2
       // ============== STEP=>1=================
       // getLoginUserDetails()
        //==================== STEP=>2 ======================
        if(token){
        getLoginUserDetails()
        }
       
       //Here i set up the timeinterval for calling userdetails on certain seconds
       //automatically so that once access token got expired it call the api of new access token
       //with refresh token and update the storage so automaticaly it started calling the
       //userdetails api with new token
       
    //    let interval= setInterval(()=>{
    //     console.log('calling interval.....')
    //     if(refreshToken){
    //         getLoginUserDetails() 
    //         console.log('refresh token exists')
    //     }
    //     },9000)
    //     return () => {
    //         //connection.disconnect();
    //         clearInterval(interval)
    //       };
    },[token,refreshToken])
    let getAccessToken=async ()=>{
      
        let token:any= await getDataFromLocalStorage('ACCESS_TOKEN')
        let final_token=token.replaceAll('"','')
        setToken(final_token)
        return token
    }

    let getRefreshToken=async ()=>{
        console.log('calling logout')
        let refreshToken:any= await getDataFromLocalStorage('REFRESH_TOKEN')
        let final_token=refreshToken.replaceAll('"','')
        console.log('Refresh TokendDD.....',final_token)
        setRefreshToken(final_token)
        return refreshToken
    }

    const getNewTokenUsingRefreshToken=async()=>{
       // getRefreshToken()
       //This is basically a RefreshToken api call function here we get new AccessToken
       //and Refresh Token and save inside Local Storage like(Async,Keychain etc)
        console.log('calling......logoutyyy')
        const headers = {
            'Content-Type': 'application/json'
          }
          console.log('REFRESH TOKEN BEFORE SEND.',refreshToken)
         
        let newToken=await axiosInstance.post('/refresh',{
               header:headers,
                body: JSON.stringify({
                    refreshToken: refreshToken,
                    expiresInMins: 3, // optional (FOR ACCESS TOKEN), defaults to 60 
                }),
            }).catch((error)=>{
                //Here we catch the error while fetching refresh token
                  console.log('hhhhhh',error)
                  console.error('ttttttJ',error.response.data.message)
            })
            
            console.log('ARZOOOOOOO........',JSON.stringify(newToken))
            let accessToken=JSON.parse(JSON.stringify(newToken)).data.accessToken
            let refreshTokenNew=JSON.parse(JSON.stringify(newToken)).data.refreshToken
            console.log('NEW ACCESS TOKEN....',accessToken)
            saveDataInLocalStorage('ACCESS_TOKEN',accessToken)
            saveDataInLocalStorage('REFRESH_TOKEN',refreshTokenNew)
            console.log('GETTING REFRESH TOKEN RESPONSE.....',newToken)
    }
  
  const  getLoginUserDetails=async()=>{
   
    getAccessToken()
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      
    ///// Calling UserDetails using Async Await ////////
      let userData:any=await axiosInstance.get('/me',{
        headers: headers
      }).catch((error)=>{
        console.error(error.response.data.message); 
        if (error.response.data.message == 'invalid signature') {
            //Specifies Error Code 500
             console.log('TOKEN FAILED.....')
           }
           if (error.response.data.message == 'Token Expired!') {
            // Call Refresh Token API Here and save token in Async Storage
            //Specifies Error Code 401
             console.log('TOKEN Expired.....')
          
             if(refreshToken){
                console.log('Refresh token exists')
                getNewTokenUsingRefreshToken()
             }
            // getNewTokenUsingRefreshToken()
           }
      })
      let userDetailsResponse
      try{
        userDetailsResponse=JSON.parse(JSON.stringify(userData)).request._response
      }catch(error){
        console.log('JSON PARSE ERROR...',error)
      }
      console.log('USER_RESPONSE.....',userDetailsResponse)
        setUserDetails(userDetailsResponse)
     

  
    }
return(<SafeAreaView style={styles.mainContainer}>
    <View style={styles.firstContainer}>
    <Text>{`TOKEN:::${token}`}</Text>
    <Text>{`REFRESHTOKEN:::${refreshToken}`}</Text>
    </View>
   <View style={styles.secondContainer}>
   <Button
    title="LOGOUT"
    onPress={()=>{
        getRefreshToken()
        getNewTokenUsingRefreshToken()
       // getNewTokenUsingRefreshToken()
        //clearAsyncStorage
    }}
    ></Button>
   <Text>{`FirstName:: ${userDetails}`}</Text>
   
    </View>
    </SafeAreaView>)
}

export default DashBoardScreen

const styles=StyleSheet.create({
    mainContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        flexDirection:'column'
    },
    firstContainer:{
        flex:.6,
        marginTop:8,
    },
    secondContainer:{
        flex:.7
    }
})