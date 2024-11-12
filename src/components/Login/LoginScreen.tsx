import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';

import { LoginScreenTypes } from './LoginScreenTypes';
import { useNavigation, ParamListBase,  NavigationProp } from '@react-navigation/native';
import { SafeAreaView,StyleSheet,Text,Button,TextInput, View,Alert } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { savePassword,saveUserName } from '../../synchRedux/slices/loginSlice';
//import { useGetDataQuery } from '../../api/GetAllApi';

const LoginScreen:React.FC<LoginScreenTypes>=()=>{
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation: NavigationProp<ParamListBase> = useNavigation();
   // const {data}=useGetDataQuery('')
    //console.log('RTK DATA...',data)
    const dispatch=useDispatch()

    const selector= useSelector((state)=>{
        console.log('Arzoo test state',state)
    })
   useEffect(()=>{
    console.log('useEffect() is calling...')
    //console.log('RTK DATA...',data)
   },[])
    let userName=useSelector((state:any)=>{
       return state.loginReducer.userName
    })

    let passWord= useSelector((state:any)=>{
       return state.loginReducer.passWord
    })

  

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
        navigation.navigate('DashBoard')
       }
    }
    return(<SafeAreaView style={style.mainContainer}>
        <Text>Hi</Text>
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
    // 
   // navigation.navigate('DashBoard')
   // setUseName('Rajveerdddd')
  
    doValidation()
   

    }}
    ></Button>
     <Text>Hnnnni</Text>
     {/* <Text>{JSON.stringify(data)}</Text> */}
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