import axios from 'axios'
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import dayjs from 'dayjs';
import { getDataFromLocalStorage ,saveDataInLocalStorage,clearAsyncStorage} from '../storage/AsyncStorage';

export const refreshTokenCall=async()=>{
    let refreshToken:any= await getDataFromLocalStorage('REFRESH_TOKEN')
     let ref=refreshToken.replaceAll('"','')
     console.log('ooooooooo..ref',ref)
     let newTokens:any
     if(ref){
     newTokens=await axios.post('https://dummyjson.com/auth/refresh',{
        refreshToken:ref,
        expiresInMins: 10
        // username: 'emilys',
        // password: 'emilyspass',
        // expiresInMins: 1, // optional, defaults to 60
      }).catch((error)=>{
        //console.error('hhhhh..',error.response)
      console.log('Errorssss inside...',error.response.message)
    })
    console.log('REEENNAAAAAA',newTokens)
    let refreshToken = JSON.parse(JSON.stringify(newTokens)).data
    .refreshToken;
  let accessToken = JSON.parse(JSON.stringify(newTokens)).data
    .accessToken;
  //console.log('REFRESH_TOKEN.....', refreshToken);
  console.log('ACCESS TOKEN.FOR NEWWWW.....', accessToken);
  //clearAsyncStorage()
  saveDataInLocalStorage('REFRESH_TOKEN',refreshToken)
  saveDataInLocalStorage('ACCESS_TOKEN',accessToken)
}
return newTokens
}

const axiosInstance= axios.create({
    baseURL:'https://dummyjson.com/auth',
})
interface decodeType{
  email:string,
  exp:number
}
// Add a request interceptor
axiosInstance.interceptors.request.use(async function (config) {
    // Do something before request is sent
    // Here will check weather the access token is expire or not if AccessToken expires 
    //Then trigger your refresh tokenapi and save new token in storage
    //This is one of the beauty of axios interceptor
     let accessToken:any= await getDataFromLocalStorage('ACCESS_TOKEN')
     let token=accessToken.replaceAll('"','')
     if(token){
     const decoded:decodeType=jwtDecode(token)
      const isExpired=dayjs.unix(decoded.exp).diff(dayjs())<1
      console.log('EXPIRATION TIME CHECKj....',isExpired)
      if(!isExpired) return config
     const res= await refreshTokenCall()
     }
    return config;
  }, function (error) {
    // Do something with request errorb
    console.log('Errrrrrrnnn')
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
   console.log('callling from response success.....')
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //console.log('calling from response error......',error.response.status)
    if(error.response.status===401){
        console.log('401 error.......')
        refreshTokenCall()
       // return Promise.reject(error);
    }
    return Promise.reject(error);
  });

export default axiosInstance