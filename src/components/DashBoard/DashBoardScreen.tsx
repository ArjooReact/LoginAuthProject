import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, SafeAreaView, Text, Button, View} from 'react-native';
import {DashBoardScreenTypes} from './DashBoardScreenTypes';
import {getDataFromLocalStorage} from '../../storage/AsyncStorage';
import {useGetUserDetailsQuery,useGetRefreshTokenMutation} from '../../rtk/api/loginApi2';
import {getAllAsyncValues} from '../../storage/AsyncStorage';
import {UserDetailsDataModel, AddressType,setUserDataModel} from './DashBoardScreenTypes';
import {useUserDataContext} from '../../storage/ContextproviderStorage/contextHooks/useUserDataContext';
const DashBoardScreen: React.FC<DashBoardScreenTypes> = ({title}) => {
  const [token, setToken] = useState<any>();
  const [refreshToken, setRefreshToken] = useState<any>();
  const {user, setUser} = useUserDataContext();
  const [userData, setUserData] = useState<UserDetailsDataModel>(setUserDataModel);

  //data =   useGetUserDetailsQuery(token)
  const {
    data, // the response from the api
    isError, // has an error
    isLoading, // first mount loading
    isFetching, // is Fetching again after the first mount
    isSuccess, // is 200
    error, // Error message
    refetch,
  } = useGetUserDetailsQuery(token);
 const [
  getRefreshToken,
  {
      //isLoading,
      data:any
  }
] = useGetRefreshTokenMutation();
 

  useEffect(() => {
    getAllTokens();
    // if (token) {
    //   //setFirstName(data.firstName)
    //   // doParsing(data)
    //   //  getUserDetails()
    //   //setUserData(data)
    // }
    if (data) {
        console.log('IS_ERROR....',isError)
        console.log('errrorrrr....',error)
        console.log('dettacc')
      setUserData(data);
    }
  }, [token, data]);

  const getAllTokens = async () => {
    let accessToken: any = await getDataFromLocalStorage('ACCESS_TOKEN');
    let refreshToken: any = await getDataFromLocalStorage('REFRESH_TOKEN');
    setToken(accessToken.replaceAll('"', ''));
    setToken(user?.token);
    setRefreshToken(refreshToken.replaceAll('"', ''));
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>{'Loading'}</Text>
      ) : (
        <View>
          <Text>{title}</Text>
          {/* <Text>{`TOKEN:::${user?.token}`}</Text> */}
          <Text>{`TOKEN:::${token}`}</Text>
          <Text>{`FIRST_NAME:::${userData?.firstName}`}</Text>
          <Text>{`ADDRESS:::${userData?.address.address}`}</Text>
          <Text>{`COORDINATES:::${userData?.address.coordinates.lat}`}</Text>
          <Text>{`EMAIL:::${userData.email}`}</Text>

          <Button
            onPress={() => {
                refetch()
            }}
            title="Press Me!!"></Button>
        </View>
      )}
    </SafeAreaView>
  );
  // return(
  // <SafeAreaView>
  //          <Text>{title}</Text>
  //          {/* <Text>{`TOKEN:::${user?.token}`}</Text> */}
  //          <Text>{`TOKEN:::${token}`}</Text>
  //          <Text>{`FIRST_NAME:::${firstName}`}</Text>
  //          {/* <Text>{`EMAIL:::${email}`}</Text> */}

  //     <Button
  //     onPress={()=>{
  //        // getUserDetails()
  //        // console.log('user details.......',data)
  //     }}
  //     title='Press Me!!'></Button>
  //     </SafeAreaView>)
};

export default DashBoardScreen;
