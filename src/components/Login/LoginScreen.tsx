import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';

import { LoginScreenTypes } from './LoginScreenTypes';
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { SafeAreaView,StyleSheet,Text,Button,TextInput, View,Alert } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { savePassword,saveUserName } from '../../synchRedux/slices/loginSlice';
import { useGetLogeedInMutation } from '../../rtk/api/loginApi';
import { useGetSignInMutation } from '../../rtk/api/loginApi2';
import { AuthUser } from '../../storage/ContextproviderStorage/userContext/UserDataContext';
import { saveDataInLocalStorage } from '../../storage/AsyncStorage';
import { useUserDataContext } from '../../storage/ContextproviderStorage/contextHooks/useUserDataContext';
const LoginScreen:React.FC<LoginScreenTypes>=()=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const[token,setToken]=useState<any>()
    const navigation: NavigationProp<ParamListBase> = useNavigation();
   //const [createUser1] = useGetSignInMutation()
   const { user, setUser } = useUserDataContext();
    const [
      getTopTestItems,
      {
          isLoading,
          data,
      }
  ] = useGetSignInMutation();
    const dispatch=useDispatch()

    const selector= useSelector((state)=>{
       // console.log('Arzoo test state',state)
    })

    let userName=useSelector((state:any)=>{
       return state.loginReducer.userName
    })

    let passWord= useSelector((state:any)=>{
       return state.loginReducer.passWord
    })
useEffect(()=>{

},[token])
  const doLogin=()=>{
    const testParams = {
      "username": 'emilys',
      "password": 'emilyspass',
      "expiresInMins": 1, 
     };
    getTopTestItems(testParams).unwrap().then((response:any)=>{
         console.log('LOGGEDD INNNN........',response)
         saveUserDataUsingAsyncStorage(response)
         saveUserDataUsingContextProvider(response)
         navigation.navigate('DashBoard')
         }).catch((error)=>{
            console.log('ERRORdddiiiii:::::',error)
         })


    console.log('clicked....')
   
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
 const saveUserDataUsingAsyncStorage=(response:any)=>{
  let accessToken = JSON.parse(JSON.stringify(response))
  .accessToken;
  let refreshToken = JSON.parse(JSON.stringify(response))
           .refreshToken;
           console.log('ACCESS TOKEN.bbjjh.....', accessToken);
           saveDataInLocalStorage('REFRESH_TOKEN',refreshToken)
           saveDataInLocalStorage('ACCESS_TOKEN',accessToken)
           setToken(token)
 }
    const doValidation=()=>{
        if(userName===''){
          Alert.alert('Please Enter UserName!!')
        }
        else if(passWord===''){
            Alert.alert('Please Enter Password')
        }
       else{
        //setUser({ userName: userName, passWord: passWord });
       // console.log('UserName:::',user?.userName)
       doLogin()
       
       }
    }
    return(<SafeAreaView style={style.mainContainer}>
        <Text>{}</Text>
   <TextInput
   style={style.inputStyles}
   value={userName}
   placeholder='Please Enter UserName'
   placeholderTextColor='gray'
   onChangeText={(text)=>{
       dispatch(saveUserName(text))
   }}
   >
   </TextInput>
   <TextInput
   style={style.inputStyles}
   value={passWord}
   placeholder='Please Enter PassWord'
    placeholderTextColor='gray'
   onChangeText={(text)=>{
       dispatch(savePassword(text))
   }}
   >
   </TextInput>
   <View style={{display:'flex',flexDirection:'row',alignSelf:'flex-start',marginLeft:20,
    alignItems:'flex-end',alignContent:'space-between',marginTop:14}}>
   <CheckBox
   style={{width:20,height:20,backgroundColor:'#ffffff',alignSelf:'flex-start'}}
   lineWidth={1}
    disabled={false}
    value={toggleCheckBox}
    boxType='square'
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text style={{marginLeft:10}}>
    Remember Me
  </Text>
   </View>
  
    <Button
    title='LOGIN'
    onPress={()=>{
   doValidation()
    }}
    ></Button>
    </SafeAreaView>)
}

const style= StyleSheet.create({
    mainContainer:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
     
    },
    inputStyles:{
        width:'90%',
        height:40,
        borderRadius:8,
        borderColor:'blue',
        borderWidth:1,
        marginTop:20
    }

})
export default LoginScreen