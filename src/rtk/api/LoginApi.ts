import { fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../AxiosInstance";
import { getDataFromLocalStorage } from "../../storage/AsyncStorage/AsyncStorage";
import getInterceptor from "../api/Interceptor";
// export const testApi = createApi({
//     reducerPath: 'testApi',
//     baseQuery: axiosBaseQuery(),
//     endpoints: (builder) => ({
//         getLogeedIn: builder.mutation({
//             query: (data) => getInterceptor('login', data),
//             transformResponse: (response: { data: any }) => response.data
//         }),
//         // getTestItems: builder.mutation({
//         //     query: (data) => getInterceptor(URLS.TEST2, data, data.token),
//         //     transformResponse: (response: { data: TestItem[] }) => response.data
//         // }),
//     }),
// });

// export const {useGetLogeedInMutation}=testApi

// export const headers1={
//            'Content-Type': 'application/json',
//            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Mjk0OTkyNzIsImV4cCI6MTcyOTUwMTA3Mn0.LvGMExzMo_hlIll2c_Jy7HGlr8sje16m2Rpot18sJF`
//        }

export const  signInApi = createApi({
    reducerPath: 'signInApi',
    baseQuery: axiosBaseQuery({
      baseUrl: 'https://dummyjson.com/auth',
    }),
    endpoints(build) {
      return {
        getUserDetails: build.query({
          query: (headers1:any) => ({
              url:'/me',
              method:'get',
              // headers:{
              //   'Content-Type': 'application/json',
              //    'Authorization': `Bearer ${headers1}`
        
              // }
              prepareHeaders: (headers:any) => {
                console.log('INSIDE HEADERS.....',headers)
                console.log('fffffffff.....',headers1)
              headers.set("Content-Type", 'application/json')
      //  'Authorization': `Bearer ${token}`
           headers.set("Authorization",`Bearer ${headers1}`)
          return headers
      },
              //prepare
             // headers:headers
          })
        }),
      
      //  getUserDetails: build.query({ (query:any) => ({ url: '/query' }) }),
        getSignIn: build.mutation({ query: (data:any) => ({ url: '/login', method: 'post',data:data }),
       // transformResponse: (response: { data: any }) => response.data
           }),

           getRefreshToken: build.mutation({ query: (data:any) => ({ url: '/refresh', method: 'post',data:data }),
          
           // transformResponse: (response: { data: any }) => response.data
               }),
      };
    },
  });

  export const {useGetSignInMutation,useGetUserDetailsQuery,useGetRefreshTokenMutation}=signInApi
  //export const {useGetSignInMutation,useLazyGetUserDetailsQuery}=signInApi