import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../AxiosInstance";

export const productLisrApi=createApi({
    reducerPath:'productlist',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://dummyjson.com',
      }),
      endpoints(build) {
        return {
          getProductListing: build.query({
            query: (headers1:any) => ({
                url:'/products',
                method:'get',
            })
          }),
    
        };
      },
})

export const {useGetProductListingQuery}=productLisrApi