import axios from 'axios'
import { useEffect } from 'react'
import { getDataFromLocalStorage } from '../storage/AsyncStorage/AsyncStorage'


let accessToken:any=async ()=>{
    console.log('calling acesstoken method')
    let tok= await getDataFromLocalStorage('ACCESS_TOKEN').then((res)=>{
        console.log('================',res)
    })
    console.log('Token....',tok)
    return tok
}
const axiosInstance=axios.create({
    baseURL:'https://dummyjson.com/auth',
   // headers: {Authorization: `Bearer ${accessToken()}`}
   // headers: {Authorization: `Bearer ${accessToken}`,
   // 'Content-Type': 'application/json',
//}
   
    //credentials:'include'
})

export default axiosInstance