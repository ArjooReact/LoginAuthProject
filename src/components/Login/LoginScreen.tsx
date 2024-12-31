import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {LoginScreenTypes} from './LoginScreenTypes';
import WithLoading from './WithLoading';
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
import {saveState} from '../../synchRedux/slices/testSlice1';
import {saveAddress} from '../../synchRedux/slices/testSlice2';
import {saveUserCredentials} from '../../synchRedux/slices/testSlice3';
//import WithAuthorization from './HOCTest';
import WithAuthorization from './WithAuthorization';
//import { useGetDataQuery } from '../../api/GetAllApi';

const LoginScreen: React.FC<LoginScreenTypes> = ({authorizationCheck,isLoadingType}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [test1, setState1] = useState();
  // const {data}=useGetDataQuery('')
  //console.log('RTK DATA...',data)
  const[isAuthorized,setIsAuthorized]=useState<any>()
  const dispatch = useDispatch();

  const selector = useSelector(state => {
    console.log('Arzoo test state', state);
  });

/////////// Learning For HOC Component ///////////////

let checkAuthorization=()=>{

  setTimeout(()=>{
    setIsAuthorized(true)
  },2000)
}


  //const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log('useEffect() is calling...');
    checkAuthorization()
    //console.log('RTK DATA...',data)
  }, []);

  const onClickTestSlice1 = () => {
    dispatch(
      saveState({
        userName: 'Rajveerhhhw',
      }),
    );
  };
  let userName = useSelector((state: any) => {
    return state.loginReducer.userName;
  });

  let passWord = useSelector((state: any) => {
    return state.loginReducer.passWord;
  });
  let testSlice1DataFetch = useSelector((state: any) => {
    return state.testSlice1Reducers.userName;
  });

  const doValidation = () => {
    if (userName === '') {
      Alert.alert('Please Enter UserName!!');
    } else if (passWord === '') {
      Alert.alert('Please Enter Password');
    } else {
      navigation.navigate('DashBoard');
    }
  };
  return (
    <SafeAreaView style={style.mainContainer}>

      {authorizationCheck?( <SafeAreaView style={style.mainContainer}>
        
        <Text>{isLoadingType}</Text>
        <Text>{testSlice1DataFetch}</Text>
  
        <TextInput
          style={style.inputStyles}
          value={userName}
          placeholder="Please Enter UserName"
          placeholderTextColor="gray"
          onChangeText={text => {
            dispatch(saveUserName(text));
          }}></TextInput>
        <TextInput
          style={style.inputStyles}
          value={passWord}
          placeholder="Please Enter PassWord"
          placeholderTextColor="gray"
          onChangeText={text => {
            dispatch(savePassword(text));
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
            doValidation();
          }}></Button>
        <Button title="testslice1" onPress={onClickTestSlice1}></Button>
      </SafeAreaView>):(<Text>{isLoadingType}</Text>)}
     
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
export default WithLoading(LoginScreen);
 //WithLoading(LoginScreen)
