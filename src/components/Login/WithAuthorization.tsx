import React,{useState,useEffect} from "react";
import { LoginScreenTypes } from "./LoginScreenTypes";

const WithAuthorization=(OldComponent:React.ComponentType<LoginScreenTypes>)=>{

    return function EnhancedComponent(){
        const[isAuthorised,setIsAuthorized]=useState<any>()

        useEffect(()=>{
            checkAuthorization()
        })

        const checkAuthorization=()=>{
            setTimeout(()=>{
                setIsAuthorized(true)
            },3000)
        }

        return <OldComponent authorizationCheck={isAuthorised}></OldComponent>
    }
}

export default WithAuthorization