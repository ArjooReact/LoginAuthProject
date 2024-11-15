
/////// TRYING 2 ////////

import axios from "axios";
 import { BaseQueryFn } from "@reduxjs/toolkit/query";
 import { AxiosRequestConfig,AxiosError } from "axios";
 import { useGetRefreshTokenMutation } from "./api/LoginApi";
 import { useUserDataContext } from "../storage/ContextProviderStorage/ContextHooks/useUserDataContext";
 import { getDataFromLocalStorage,saveDataInLocalStorage } from "../storage/AsyncStorage/AsyncStorage"; 
 
 export const refreshTokenCall=async()=>{
  let refreshToken:any= await getDataFromLocalStorage('REFRESH_TOKEN')
   let ref=refreshToken.replaceAll('"','')
   console.log('ooooooooo..ref',ref)
   let newTokens:any
   if(ref){
   newTokens=await axios.post('https://dummyjson.com/auth/refresh',{
      refreshToken:ref,
      expiresInMins: 1
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
const axiosInstance=axios.create({
    baseURL: 'https://dummyjson.com/auth/'
})
let token=async()=>{
  let refreshToken: any = await getDataFromLocalStorage('REFRESH_TOKEN');
  return refreshToken
}
const axiosBaseQuery = (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      headers?:AxiosRequestConfig['headers']
    },
    unknown,
    unknown
  > => async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return { error: { status: err.response?.status, data: err.response?.data } };
    }
  };
  //axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Mjk1NTk5NDksImV4cCI6MTcyOTU2MTc0OX0._XLpPA5ArkqVeXs16AqF9tXe0ECgTvuIKKElYAbT7XA'
  //Add a request interceptor
  axios.interceptors.request.use(
 (config) => {
   // You can modify 
 
  return config
 },
 (error) => {
   return Promise.reject(error);
 }
);

// Add a response interceptor
axios.interceptors.response.use(
 (response) => {
   // You can modify the response data here, e.g., handling pagination
   console.log('RESPONSE ARZOOOOO.........',JSON.parse(JSON.stringify(response)).data)
   return response;
 },
 (error) => {
  console.log('Response ERRRRRRRRRRRRRRR',error)
  if(error.response.status=401){
    console.log('Calling..refresh token api.api......')
    refreshTokenCall()
  }
   return Promise.reject(error);
 }
);

  export default axiosBaseQuery