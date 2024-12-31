import React,{useState,useEffect} from 'react'
import { LoginScreenTypes } from './LoginScreenTypes'

const WithLoading=(OldComponent:React.ComponentType<LoginScreenTypes>)=>{


    return function EnhancedComponent(props:LoginScreenTypes){
       const[isLoading,setIsLoading]=useState<any>()
        useEffect(()=>{
            fetchLoading()
        })
        const fetchLoading=()=>{
            
        
                setTimeout(()=>{
                    setIsLoading('true')
                 },3000)
        }

        return <OldComponent isLoadingType={isLoading}></OldComponent>
    }
}

export default WithLoading