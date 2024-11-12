import { fetchBaseQuery,createApi} from "@reduxjs/toolkit/query/react";


 //const fetchBaseQuery=require('@reduxjs/toolkit/query/react')
 //const createApi=require('@reduxjs/toolkit/query/react')
// export const getAllTypeMasterProduct=createApi({
//    reducerPath:'allTypeProductListing',
//    baseQuery: fetchBaseQuery({baseUrl:'https://fakestoreapi.com/'}),
//    endpoints: (builder)=>({
//         getMasterList: builder.query<string,void>({
//             query: ()=> `products`,
//         }),
//    }), 
// })

// export const { useGetMasterListQuery } = getAllTypeMasterProduct
//export const { useGet}

export const getAllTypeMasterProduct = createApi({
    reducerPath: 'productMasterListingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getData: builder.query({
        query: () => ({
            url:'products',
            method:'get'
        })
      }),
      getDataById:builder.query({
        query:id=>({
         url:`products/${id}`,
         method:'get',
        })
      }) ,
      addNewPost:builder.mutation({
        query: data=>({
          url:'products',
          method:'post',
          body:JSON.stringify(data)
        })
      })

    }),
    refetchOnReconnect:true,
    refetchOnMountOrArgChange:true,
    refetchOnFocus:true
  })

  //export const { useGetPokemonByNameQuery } = getProductApiCall
  //export const { useGetDataQuery }= getAllTypeMasterProduct
  export const { useGetDataQuery,useGetDataByIdQuery,useAddNewPostMutation } = getAllTypeMasterProduct