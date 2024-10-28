import React,{useState,useEffect} from "react";
import CustomButton from "../../../packages/atoms/Button/src";
import { getCredentialsUsingKeychain } from "../../../storage/KeyChainStorage/KeyChain";
import { getDataFromLocalStorage,saveDataInLocalStorage ,clearAsyncStorage} from "../../../storage/AsyncStorage/AsyncStorage";
import { useUserDataContext } from "../../../storage/ContextProviderStorage/ContextHooks/useUserDataContext";
import { StyleSheet,SafeAreaView,Text } from "react-native";
import { useGetProductListingQuery } from "../../../rtk/api/ProductApi";
import {
   useNavigation,
   ParamListBase,
   NavigationProp,
 } from '@react-navigation/native';
import { HomeType } from "./HomeType";
const Home:React.FC<HomeType>=()=>{
  // const {data}=useGetProductListingQuery('')
  // console.log('PRODUCT_DATA......',data)
       const [token,setToken]=useState<string>()
       const navigation: NavigationProp<ParamListBase> = useNavigation();
    const [keyChainData,setKeyChainData]=useState<any>()
    const[cred,setCred]=useState<string>()
    const {user, setUser} = useUserDataContext();
    let click:any=()=>{
     console.log('clicked')
     saveDataInLocalStorage('IS_LOGGED_IN',false)
     clearAsyncStorage()
     navigation.navigate('LoginScreen')
    }
    //let cred:any
 useEffect(()=>{
    getAllTokens()
    console.log('OUTSIDE CRED.....',cred)
  if(cred){
   console.log('INSIDE CRED.......',cred)
  }
 },[token])
    const getAllTokens = async () => {
        let accessToken: any = await getDataFromLocalStorage('ACCESS_TOKEN');
        let refreshToken: any = await getDataFromLocalStorage('REFRESH_TOKEN');
        let accessTokenKeychain:any= await getCredentialsUsingKeychain()
       
        console.log('KEYCHAIN DATA...',accessTokenKeychain)
        setToken(accessToken.replaceAll('"', ''));
       // setToken(user?.token);
        setKeyChainData(accessTokenKeychain)
       // console.log('set cred beforecccc.x...',JSON.parse(JSON.stringify(keyChainData)).password)
        setCred(accessTokenKeychain.password)
        //setRefreshToken(refreshToken.replaceAll('"', ''));
      };
return(<SafeAreaView>
    {/* <Text>{title}</Text> */}
    <CustomButton btnTitle='Logout!!' clickHandler={click} ></CustomButton>
    <Text>{`Access Token using AsyncStorage ${token}`}</Text>
    <Text>{`Access Token using KeyChain Storage ${cred}`}</Text>
    </SafeAreaView>)
}

export default Home