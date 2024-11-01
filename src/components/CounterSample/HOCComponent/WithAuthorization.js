//let EnhancedComponent= WithComponent(OldComponent)
import React,{useState,useEffect} from "react"
const WithAuthorization=(OldComponent,type)=>{

    return function EnhancedComponent(props){
        const[allowed,setIsAllowed]=useState()
         setTimeout(()=>{
          if(type==='admin'){
            setIsAllowed(true)
            console.log('User Is Authorized.....')
          }else{
            setIsAllowed(false)
            console.log('User is Not Authorized......')
          }
         },5000)
        return <OldComponent {...props} userChecking={allowed}></OldComponent>
    }
}

export default WithAuthorization