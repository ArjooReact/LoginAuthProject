import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { saveDataInLocalStorage } from '../../storage/AsyncStorage/AsyncStorage';
import {LoginScreenTypes} from './LoginScreenTypes';
import { UserDataType } from './LoginScreenTypes';
import style from './LoginScreenStyles';
import { saveCredentialsUsingKeychain } from '../../storage/KeyChainStorage/KeyChain';
import validator from '../../utils/Validation'
import { AuthUser } from '../../storage/ContextProviderStorage/UserContext/UserDataContext';
import { useGetSignInMutation } from '../../rtk/api/LoginApi';
import { showError,showSuccess } from '../../utils/HelperFunction';
import {
  useNavigation,
  ParamListBase,
  NavigationProp,
} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  Alert,
  ActivityIndicator
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useUserDataContext } from '../../storage/ContextProviderStorage/ContextHooks/useUserDataContext';
import {CustomTextInput} from '../../packages/atoms/TextInput/src/CustomTextInputType';
//import {savePassword, saveUserName} from '../..//synchRedux/slices/loginSlice';
import {savePassword, saveUserName} from '../../redux/synchRedux/slices/loginSlice'
import CustomButton from '../../packages/atoms/Button/src';
import CustomTextInputType from '../../packages/atoms/TextInput/src/CustomTextInput';

const LoginScreen: React.FC<LoginScreenTypes> = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
 const { user, setUser } = useUserDataContext();
  const[token,setToken]=useState<any>()
  const dispatch = useDispatch();

  // const selector = useSelector(state => {
  //  // console.log('Arzoo test state', state);
  // });

  const [
    getTopTestItems,
    {
        isLoading,
        data,
    }
] = useGetSignInMutation();
  let userData:UserDataType = useSelector((state:any) => {
    return state.loginReducer.userData;
  });
console.log('LOGIN DATA..',data)
   let userName=userData.userName
   let passWord=userData.userPassword

  const changeUserNameInput: any = (text: string) => {
    dispatch(saveUserName(text));
  };

  const changePasswordInput: any = (text: string) => {
    dispatch(savePassword(text));
  };
  const saveUserDataUsingAsyncStorage=(response:any)=>{
    let accessToken = JSON.parse(JSON.stringify(response))
    .accessToken;
    let refreshToken = JSON.parse(JSON.stringify(response))
             .refreshToken;
             console.log('ACCESS TOKEN.bbjjh.....', accessToken);
             saveDataInLocalStorage('REFRESH_TOKEN',refreshToken)
             saveDataInLocalStorage('ACCESS_TOKEN',accessToken)
             saveDataInLocalStorage('IS_LOGGED_IN',true)
             setToken(token)
   }
   const saveDataUsingKeyChainStorage=(response:any)=>{
    let accessToken = JSON.parse(JSON.stringify(response))
    .accessToken;
    let refreshToken = JSON.parse(JSON.stringify(response))
             .refreshToken;
             console.log('ACCESS TOKEN.bbjjh.....', accessToken);
             console.log('ACCESS TOKEN.bbjjh.....', accessToken);
             saveCredentialsUsingKeychain('ACCESS_TOKENC',accessToken)
            // saveCredentialsUsingKeychain('REFRESH_TOKEN',refreshToken)
   }
   const saveUserDataUsingContextProvider=(response:any)=>{
    let accessToken = JSON.parse(JSON.stringify(response))
    .accessToken;
    let userName = JSON.parse(JSON.stringify(response)).firstName
    let email = JSON.parse(JSON.stringify(response)).email 
  
    let userObj:AuthUser={
      isloggedIn:true,  
      userName: userName,
      passWord: email,
      token:accessToken
     }
     setUser(userObj);
   }
  const doLoginAsync=()=>{
    const testParams = {
      "username": 'emilys',
      "password": 'emilyspass',
      "expiresInMins": 1, 
     };
    getTopTestItems(testParams).unwrap().then((response:any)=>{
         console.log('LOGGEDD INNNN........',response)
         saveUserDataUsingAsyncStorage(response)
         saveUserDataUsingContextProvider(response)
         saveDataUsingKeyChainStorage(response)
         navigation.navigate('DashBoard')
         }).catch((error)=>{
            console.log('ERRORdddiiiii:::::',error)
         })


    console.log('clicked....')
   
  }

  function isValidData(userName:string,passWord:string){
    console.log('clicked:::')
    const error:any = validator({
      userName,
      passWord,
    });
   console.log('ERROR:::',error)
    if (error) {
      showError(error);
      Alert.alert(error);
      return false;
    } else {
      showSuccess('Success123');
      return true;
    }
  }

  
  const doLogin=()=>{
    if(isValidData(userName,passWord)){
     
      doLoginAsync()
      console.log('Final Submit Data...',JSON.stringify(userData))
    }
  }
  const doValidation = () => {
    if (userName === '') {
      Alert.alert('Please Enter UserName!!');
    } else if (passWord === '') {
      Alert.alert('Please Enter Password');
    } else {
      navigation.navigate('DashBoard');
      console.log('Final Submit Data...',JSON.stringify(userData))
    }
  };
  return (
    <SafeAreaView style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1,width:'100%'}}>
      {isLoading?(<ActivityIndicator></ActivityIndicator>):(<View style={style.mainContainer}>
        <Text>Hi</Text>

      <CustomTextInputType
        value={userData.userName}
        placeholder="Please Enter UserName"
        placeholderTextColor="gray"
        onChangeTextHandler={changeUserNameInput}></CustomTextInputType>

      <CustomTextInputType
        value={userData.userPassword}
        placeholder="Please Enter PassWord"
        placeholderTextColor="gray"
        onChangeTextHandler={changePasswordInput}></CustomTextInputType>

      <View style={style.checkBoxContainer}>
        <CheckBox
          style={style.checkBox}
          lineWidth={1}
          disabled={false}
          value={toggleCheckBox}
          boxType="square"
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        <Text style={{marginLeft: 10}}>Remember Me</Text>
      </View>

      <Button
        title="LOGIN"
        onPress={() => {
         
        // doValidation();
         doLogin()
        // navigation.navigate('DashBoard');
        
        }}></Button>
      </View>)}
     
    </SafeAreaView>
  );
};


export default LoginScreen;
