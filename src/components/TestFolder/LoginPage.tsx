import React,{useState,useRef,useEffect} from 'react';
import {Text, SafeAreaView,Button} from 'react-native';
import {LoginScreenTypes} from '../Login/LoginScreenTypes';
const LoginPage: React.FC<LoginScreenTypes> = ({title}) => {
const[count,setCount]=useState<any>(0)
const countRef=useRef(0)

useEffect(()=>{
console.log('calling.x....')
},[])

let increamentFunc=()=>{
  setCount(count+1)
}
let increamentFuncRef=()=>{
  countRef.current += 1;  // Update ref value without triggering re-render
  console.log(countRef.current); // Log the current count
}
  return (
    <SafeAreaView>
      <Text>Welcome to PlayGround</Text>
      <Text>{countRef.current}</Text>
      <Button
      title='Increament'
      onPress={increamentFuncRef}
      >

      </Button>
    </SafeAreaView>
  );
};

export default LoginPage;
