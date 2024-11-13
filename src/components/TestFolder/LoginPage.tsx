import React, {useState,useEffect} from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {LoginScreenTypes} from '../Login/LoginScreenTypes';
import CustomButton from './CustomButton/CustomButton';
import { useAddNewPostMutation } from '../../api/GetAllApi';
// import { useGetDataQuery } from '../../api/GetAllApi';
import axios from 'axios';


export function sum(a:number,b:number){
  return a+b
}
export const doFetch= async ()=>{
  const data=await axios.get('https://fakestoreapi.com/products')
  return data
}

const LoginPage: React.FC<LoginScreenTypes> = ({title}) => {
//  const {data}=useGetDataQuery('')
 // console.log('RTK DATAooooo...',data)
  const [titleTxt, setTitleTxt] = useState('');
  const[createProduct] = useAddNewPostMutation()
  useEffect(()=>{
    doFetch()
  },[])
    const clickHandler=()=>{
    console.log('clicked button aaa....')
    //return a+b
    //console.log('RTK DATA...',data)
    addProducts
  }
  const addProducts=()=>{
    console.log('calling add products')
    const dataParams=   {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
  }
    createProduct(dataParams).unwrap().then((response)=>{
      console.log('LOGIN_RESPONSEcccc:::::::',response)
    })
  
  }
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
        onClickHandler={addProducts}
        ></CustomButton>
    </SafeAreaView>
  );
};

export default LoginPage;
