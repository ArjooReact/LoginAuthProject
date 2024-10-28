import React,{useState} from "react";
import { useUserDataContext } from "../../../storage/ContextProviderStorage/ContextHooks/useUserDataContext";
import { SafeAreaView,Text,View } from "react-native";
import { ProfileType } from "./ProfileType";
import { getDataFromLocalStorage } from "../../../storage/AsyncStorage/AsyncStorage";
import { getCredentialsUsingKeychain } from "../../../storage/KeyChainStorage/KeyChain";
import { useFocusEffect } from '@react-navigation/native';
import CustomButton from "../../../packages/atoms/Button/src";
//import {}
import { useGetUserDetailsQuery } from "../../../rtk/api/LoginApi";
import {UserDetailsDataModel, AddressType,setUserDataModel} from './ProfileType'
const Profile:React.FC<ProfileType>=()=>{
  const [token,setToken]=useState<string>()
  const [keyChainData,setKeyChainData]=useState<any>()
  const[cred,setCred]=useState<string>()
  const {user, setUser} = useUserDataContext();
  const [userData, setUserData] = useState<UserDetailsDataModel>(setUserDataModel);
  const {
    data, // the response from the api
    isError, // has an error
    isLoading, // first mount loading
    isFetching, // is Fetching again after the first mount
    isSuccess, // is 200
    error, // Error message
    refetch,
  } = useGetUserDetailsQuery(token); 
  useFocusEffect(
    React.useCallback(() => {
      //Do something when the screen is focused
     getAllTokens()
     if (data) {
      console.log('IS_ERROR....',isError)
      console.log('errrorrrr....',error)
      console.log('dettacc',data)
    setUserData(data);
  }
      return () => {
         // Do something when the screen is unfocused
        //Useful for cleanup functions
      };
    }, [data]))

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
  return( <SafeAreaView>
    {isLoading ? (
      <Text>{'Loading'}</Text>
    ) : (
      <View>
        <Text>Welcome to Profile</Text>
        {/* <Text>{`TOKEN:::${user?.token}`}</Text> */}
        <Text>{`TOKEN:::${token}`}</Text>
        <Text>{`FIRST_NAME:::${userData?.firstName}`}</Text>
        <Text>{`ADDRESS:::${userData?.address.address}`}</Text>
        <Text>{`COORDINATES:::${userData?.address.coordinates.lat}`}</Text>
        <Text>{`EMAIL:::${userData.email}`}</Text>

        <CustomButton btnTitle='Press Me!!' clickHandler={refetch}></CustomButton>
      </View>
    )}
  </SafeAreaView>
)
}

export default Profile