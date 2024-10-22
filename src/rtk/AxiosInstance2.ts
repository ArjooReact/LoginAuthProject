// import axios from "axios";
// import { BaseQueryFn } from "@reduxjs/toolkit/query";
// const axiosInstance = axios.create({
//     baseURL: 'https://dummyjson.com/auth/',
// });

// export  const axiosBaseQuery = (): BaseQueryFn<any> => async (
//     requestOptions,
// ) => {
//     try {

//         const result = await axiosInstance({
//             ...requestOptions,
//         });
    
//         return { data: result.data };
//     } catch (e: any) {
//         return { error: e?.message }
//     }
// }

// export default axiosBaseQuery


/////// TRYING 2 ////////

import axios from "axios";
 import { BaseQueryFn } from "@reduxjs/toolkit/query";
 import { AxiosRequestConfig,AxiosError } from "axios";
const axiosInstance=axios.create({
    baseURL: 'https://dummyjson.com/auth/'
})
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
   // You can modify the request config here, e.g., add authentication headers
   // config.headers.Authorization = `Bearer ${getToken()}`;
   console.log('MAIN_CONFIGGGGGGGG',config)
   return config;
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
   return Promise.reject(error);
 }
);

  export default axiosBaseQuery