import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { saveDataInLocalStorage } from '../storage/AsyncStorage';
import {LoginScreenTypes} from './LoginScreenTypes';
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
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {savePassword, saveUserName} from '../../synchRedux/slices/loginSlice';
import axiosInstance from '../axiosInstance/AxiosInstance';
const LoginScreen: React.FC<LoginScreenTypes> = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  // const dispatch = useDispatch();

  // const selector = useSelector(state => {
  //   console.log('Arzoo test state', state);
  // });

  // let userName = useSelector((state: any) => {
  //   return state.loginReducer.userName;
  // });

  // let passWord = useSelector((state: any) => {
  //   return state.loginReducer.passWord;
  // });

  let doLogin = async () => {
    console.log('calling loggeddddd.......')
    let loginResponse = await axiosInstance
      .post('/login', {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 1, // optional, defaults to 60
      })
      .catch(error => {
        console.error('ERROR.login.DDD.', error);
      });
    let refreshToken = JSON.parse(JSON.stringify(loginResponse)).data
      .refreshToken;
    let accessToken = JSON.parse(JSON.stringify(loginResponse)).data
      .accessToken;
    //console.log('REFRESH_TOKEN.....', refreshToken);
    console.log('ACCESS TOKEN.bbjjh.....', accessToken);
    saveDataInLocalStorage('REFRESH_TOKEN',refreshToken)
    saveDataInLocalStorage('ACCESS_TOKEN',accessToken)
  };

  // const doValidation = () => {
  //   if (userName === '') {
  //     Alert.alert('Please Enter UserName!!');
  //   } else if (passWord === '') {
  //     Alert.alert('Please Enter Password');
  //   } else {
  //     //setUser({ userName: userName, passWord: passWord });
  //     // console.log('UserName:::',user?.userName)
  //     doLogin();
  //    // navigation.navigate('DashBoard');
  //   }
  // };
  return (
    <SafeAreaView style={style.mainContainer}>
      <Text>Hi</Text>
      <TextInput
        style={style.inputStyles}
       // value={}
        placeholder="Please Enter UserName"
        placeholderTextColor="gray"
        onChangeText={text => {
         // dispatch(saveUserName(text));
        }}></TextInput>
      <TextInput
        style={style.inputStyles}
       // value={passWord}
        placeholder="Please Enter PassWord"
        placeholderTextColor="gray"
        onChangeText={text => {
         // dispatch(savePassword(text));
        }}></TextInput>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          marginLeft: 20,
          alignItems: 'flex-end',
          alignContent: 'space-between',
          marginTop: 14,
        }}>
        <CheckBox
          style={{
            width: 20,
            height: 20,
            backgroundColor: '#ffffff',
            alignSelf: 'flex-start',
          }}
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
          //
          // navigation.navigate('DashBoard')
          // setUseName('Rajveerdddd')
          doLogin();
          navigation.navigate('DashBoard')
          //console.log('Checkbox Value:::::',toggleCheckBox)
        }}></Button>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyles: {
    width: '90%',
    height: 40,
    borderRadius: 8,
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 20,
  },
});
export default LoginScreen;
