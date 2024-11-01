//const EnhancedComponent=WithComponent(OldComponent)
import React,{useState,useEffect} from 'react'
import { SafeAreaView,Text } from 'react-native'

const WithComponent=(OldComponent,URL)=>{
   return function EnhancedComponent(props){
    const[dataRes,setDataRes]=useState()
    useEffect(()=>{
      fetchData()
    },[])
    const fetchData= async ()=>{
        let response= await fetch(URL).then(res=>res.json()).then((response)=>{
            //console.log('Final rse=====>',response)
            setDataRes(response)
            return response
        })
    }
    return(<OldComponent {...props} response={dataRes}></OldComponent>)
   }
}
export default WithComponent