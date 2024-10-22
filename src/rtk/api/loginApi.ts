import { fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react";
//import axiosB
import { axiosBaseQuery } from "../AxiosBaseQuery";

export const getLoggedInApi = createApi({
    reducerPath: 'loginApiww',
   //baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/auth/'}),
    baseQuery: axiosBaseQuery({
      baseUrl:'https://dummyjson.com/auth/'
    }),
    endpoints: (builder) => ({
        
      getLogeedIn:builder.mutation({
        query: data=>({
          url:'login',
          method:'post',
          body:{
            "username": 'emilys',
            "password": 'emilyspass',
            "expiresInMins": 30, 
           }
        })
        
      })

    }),
    refetchOnReconnect:true,
    refetchOnMountOrArgChange:true,
    refetchOnFocus:true
  })

  //export const { useGetPokemonByNameQuery } = getProductApiCall
  //export const { useGetDataQuery }= getAllTypeMasterProduct
  export const {useGetLogeedInMutation } = getLoggedInApi