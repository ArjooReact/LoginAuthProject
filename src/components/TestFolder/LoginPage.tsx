import React, {useState,useEffect} from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {LoginScreenTypes} from '../Login/LoginScreenTypes';
import CustomButton from './CustomButton/CustomButton';
import axios from 'axios';
export  const clickHandler=()=>{
  console.log('clicked button....')
  //return a+b
}

export function sum(a:number,b:number){
  return a+b
}
export const doFetch= async ()=>{
  const data=await axios.get('https://fakestoreapi.com/products')
  return data
}

const LoginPage: React.FC<LoginScreenTypes> = ({title}) => {
  const [titleTxt, setTitleTxt] = useState('');
  useEffect(()=>{
    doFetch()
  },[])
  return (
    <SafeAreaView>
      <Text>{titleTxt}</Text>
      <Text testID="text1">Hello Testing..</Text>
      <Button
        title="submit"
        onPress={() => {
          console.log('btn clicked...');
         doFetch()
        }}></Button>
        <CustomButton
        title='Submit'
        onClickHandler={clickHandler}
        ></CustomButton>
    </SafeAreaView>
  );
};

export default LoginPage;
