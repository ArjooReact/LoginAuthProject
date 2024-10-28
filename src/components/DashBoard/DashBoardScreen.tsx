import React,{useState,useEffect} from "react";
import { StyleSheet,SafeAreaView,Text } from "react-native";
import { DashBoardScreenTypes } from "./DashBoardScreenTypes";
import { getDataFromLocalStorage } from "../../storage/AsyncStorage/AsyncStorage";
import { useUserDataContext } from "../../storage/ContextProviderStorage/ContextHooks/useUserDataContext";
import { getCredentialsUsingKeychain ,getCredentials} from "../../storage/KeyChainStorage/KeyChain";
import CustomButton from "../../packages/atoms/Button/src";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../TabComponents/Home/Home";
import Product from "../TabComponents/Product/Product";
import Settings from "../TabComponents/Settings/Settings";
import Profile from "../TabComponents/Profile/Profile";
const DashBoardScreen:React.FC<DashBoardScreenTypes>=({title})=>{
//     const [token,setToken]=useState<string>()
//     const [keyChainData,setKeyChainData]=useState<any>()
//     const[cred,setCred]=useState<string>()
//     const {user, setUser} = useUserDataContext();
//     let click:any=()=>{
//      console.log('clicked')
//     }
//     //let cred:any
//  useEffect(()=>{
//     getAllTokens()
//     console.log('OUTSIDE CRED.....',cred)
//   if(cred){
//    console.log('INSIDE CRED.......',cred)
//   }
//  },[token])
//     const getAllTokens = async () => {
//         let accessToken: any = await getDataFromLocalStorage('ACCESS_TOKEN');
//         let refreshToken: any = await getDataFromLocalStorage('REFRESH_TOKEN');
//         let accessTokenKeychain:any= await getCredentialsUsingKeychain()
       
//         console.log('KEYCHAIN DATA...',accessTokenKeychain)
//         setToken(accessToken.replaceAll('"', ''));
//        // setToken(user?.token);
//         setKeyChainData(accessTokenKeychain)
//        // console.log('set cred beforecccc.x...',JSON.parse(JSON.stringify(keyChainData)).password)
//         setCred(accessTokenKeychain.password)
//         //setRefreshToken(refreshToken.replaceAll('"', ''));
//       };
// return(<SafeAreaView>
//     <Text>{title}</Text>
//     <CustomButton btnTitle='Press Me!!' clickHandler={click}></CustomButton>
//     <Text>{`Access Token using AsyncStorage ${token}`}</Text>
//     <Text>{`Access Token using KeyChain Storage ${cred}`}</Text>
//     </SafeAreaView>)


const Tab=createBottomTabNavigator()
return<Tab.Navigator>
{/* <Tab.Screen name="Screen1" component={TabScreen1} options={{headerShown:false}}>
</Tab.Screen> */}
<Tab.Screen name="Home" component={Home} options={{headerShown:false}}>
</Tab.Screen>
<Tab.Screen name="Product" component={Product} options={{headerShown:false}}>
</Tab.Screen>

<Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}>
</Tab.Screen>
<Tab.Screen name="Settings" component={Settings} options={{headerShown:false}}>
</Tab.Screen>
</Tab.Navigator>
}

export default DashBoardScreen