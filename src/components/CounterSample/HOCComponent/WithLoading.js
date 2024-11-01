
//const EnhancedComponent= WithLoading(OldComponent)
import React,{useState,useEffect} from 'react'
const WithLoading=(OldComponent)=>{
 
    return function EnhancedComponent(props){
        const[loading,setLoading]=useState(false) 
        useEffect(()=>{
           setLoadingData()
        },[])
        const setLoadingData=()=>{
           setTimeout(()=>{
            setLoading(true)
           },5000)
        }
        return <OldComponent {...props} isLoading={loading}></OldComponent>
    }
}

export default WithLoading