import React from 'react';
//import {act} from 'react'
import {test, jest} from '@jest/globals';
import {expect, it, describe, beforeEach,afterEach} from '@jest/globals';
import {renderHook, waitFor, act,cleanup} from '@testing-library/react-native';
import type {ReactNode} from 'react';
import {Provider} from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { signInApi } from '../src/rtk/api/LoginApi';
import { productLisrApi } from '../src/rtk/api/ProductApi';
import { useGetProductListingQuery } from '../src/rtk/api/ProductApi';
import { store1 } from '../src/redux/store/store';
import { getDataFromLocalStorage } from '../src/storage/AsyncStorage/AsyncStorage';
import { useGetSignInMutation,useGetUserDetailsQuery,useGetRefreshTokenMutation } from '../src/rtk/api/LoginApi';
//import configureStore from 'redux-mock-store';
//import { configureStore } from '@reduxjs/toolkit';
//import configureStore from 'redux-mock-store';
//import configureStore from 'redux-mock-store' //ES6 modules
import { useUserDataContext } from '../src/storage/ContextProviderStorage/ContextHooks/useUserDataContext';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        [productLisrApi.reducerPath]: productLisrApi.reducer,
    },
   

middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(productLisrApi.middleware),
   });


  function wrapper({children}: {children: ReactNode}) {
      return <Provider store={store}>{children}</Provider>;
    }

    beforeEach(() => {
        fetchMock.resetMocks();
      });
      //afterEach(cleanup);
      
    //   jest.mock('redux-persist', () => {
    //     const real = jest.requireActual('redux-persist');
    //     return {
    //       persistReducer: jest
    //         .fn()
    //         .mockImplementation((config, reducers) => reducers),
    //     };
    //   });
    
      jest.mock('@react-native-async-storage/async-storage', () =>
        require('@react-native-async-storage/async-storage/jest/async-storage-mock')
      );

      describe('useGetDataQuery', () => {
        const endpointName = 'products';
        const pokemon = 'pikachu';
        const data = {};
      
        beforeEach(() => {
            fetchMock.mockOnceIf(`https://fakestoreapi.com`, () =>
              Promise.resolve({
                status: 200,
                body: JSON.stringify({data}),
              }),
            );
          });
    
        // beforeEach((): void => {
        //   jest.setTimeout(90000);
        //  // p = new SUT.PlaywrightFluent();
        // });
      
        /////// TEST CASE
      
       
       
    
    
         // useGetUserDetailsQuery
         it('get method test case..', async () => {
          //jest.setTimeout(30000);
     
          //console.log('ARZOO RESULT..uuuu.......', result);
        
          const { result } = renderHook(() =>  useGetProductListingQuery(''),{
            wrapper
          });
        //const { data, error } = result.current;
      //  console.log('ARZOO RESULT..uuuu.......', result);
          const matchObject = {
            status: 'pending',
            endpointName: 'getProductListing',
           // requestId: result.current.requestId,
            originalArgs: '',
           // startedTimeStamp: result.current.startedTimeStamp,
            isUninitialized: false,
            isLoading: true,
            isSuccess: false,
            isError: false,
            data: undefined,
            currentData: undefined,
            isFetching: true,
          };
          await act(async () => {
            await waitFor(() => {
                expect(result.current.isSuccess).toBe(true)
                console.log('result 2.ff.......', result.current.isSuccess)
                console.log('result 2.ff.hhhhh......', result)
                console.log('response data......', result.current.data.products[0])
              //expect(result.current.isAuthenticated).toBeUndefined();
            },{timeout:70000});
          });
          //here all the test case were called before promise call
       //   expect(result.current).toMatchObject(matchObject);
     

        
          expect(fetchMock).toBeCalledTimes(0);
          expect(result.current.data).toBeDefined()
          // This test cases were called after fetch call or After Promise call
          expect(result.current.isLoading).toBe(false);
          expect(result.current.isSuccess).toBe(true);
          expect(result.current.isError).toBe(false);
         // expect(result.current.data[0]).toStrictEqual(users);
          expect(fetchMock).toBeCalledTimes(0);
          expect(result.current.isLoading).toBe(false);
       // }
        });
      
      });
  