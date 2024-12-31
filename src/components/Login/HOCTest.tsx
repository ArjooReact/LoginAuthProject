

// let EnhancedComponent=HOCComponent(props){
//     return EnhancedComponent()
// }

import React,{useState,useEffect} from 'react'

 interface HOCType{
   title?:string
}

const WithAuthorization=(OldComponent:React.ComponentType<any>)=>{

    return function EnhancedComponent(props:any){
        
        const[isAuthorized,setIsAuthorized]=useState<any>()

        useEffect(()=>{
            checkAuthorization()
        },[])

        let checkAuthorization=()=>{

            setTimeout(()=>{
              setIsAuthorized(true)
            },2000)
          }

       return <OldComponent authorizationCheck={isAuthorized} ></OldComponent>   
    }
}

export default WithAuthorization