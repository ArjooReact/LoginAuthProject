import React from 'react';
//import {act} from 'react'
import {test, jest} from '@jest/globals';
import {expect, it, describe, beforeEach,afterEach} from '@jest/globals';
import {renderHook, waitFor, act,cleanup} from '@testing-library/react-native';
import type {ReactNode} from 'react';
import {Provider} from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { signInApi } from '../src/rtk/api/LoginApi';
import { store1 } from '../src/redux/store/store';
import { getDataFromLocalStorage } from '../src/storage/AsyncStorage/AsyncStorage';
import { useGetSignInMutation,useGetUserDetailsQuery,useGetRefreshTokenMutation } from '../src/rtk/api/LoginApi';
//import configureStore from 'redux-mock-store';
//import { configureStore } from '@reduxjs/toolkit';
//import configureStore from 'redux-mock-store';
//import configureStore from 'redux-mock-store' //ES6 modules
import { useUserDataContext } from '../src/storage/ContextProviderStorage/ContextHooks/useUserDataContext';
import { configureStore } from '@reduxjs/toolkit';

let refreshToken:any
let accessToken:any
const initialStateMock = {
  'hello':'test'
}
// const mockStore = configureStore([]);
// const store = mockStore(initialStateMock);
//const {user, setUser} = useUserDataContext();
export const store = configureStore({
  reducer: {
      [signInApi.reducerPath]: signInApi.reducer,
  },
 // middleware: getDefaultMiddleware({}).concat(getAllTypeMasterProduct.middleware)

  middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false
          }).concat(signInApi.middleware),
});
let refreshToken1=async()=>{
  let refreshToken:any= await getDataFromLocalStorage('REFRESH_TOKEN')
  let ref=refreshToken.replaceAll('"','')
  return ref
}

function wrapper({children}: {children: ReactNode}) {
    return <Provider store={store}>{children}</Provider>;
  }

  beforeEach(() => {
    fetchMock.resetMocks();
    refreshToken1()
  });

  
  jest.mock('redux-persist', () => {
    const real = jest.requireActual('redux-persist');
    return {
      persistReducer: jest
        .fn()
        .mockImplementation((config, reducers) => reducers),
    };
  });

  jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
  );
  describe('All testcase for LoginApiTest', () => {
    const endpointName = 'me';
    const pokemon = 'pikachu';
    const data = {};
  
    beforeEach(() => {
      fetchMock.mockOnceIf(`https://dummyjson.com/auth`, () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify({data}),
        }),
      );
    });

    beforeEach((): void => {
      jest.setTimeout(90000);
    });
  
    /////// TEST CASE
  
    beforeEach(() => {
      fetchMock.mockOnceIf(`https://dummyjson.com/auth`, () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify({data}),
        }),
      );
    });
    it('post method UserLogiing test case', async () => {
      const {result} = renderHook(() => useGetSignInMutation(), {
        wrapper,
      });
      let response: any;
      const dataParams = {
        "username": 'emilys',
        "password": 'emilyspass',
        "expiresInMins": 1, 
       };
      console.log('uuuu....', result.current);
      const [createUser] = result.current;
      await act(async () => {
        response = await createUser(dataParams)
          .unwrap()
          .catch(error => console.log('error', error));
      });
      // here if you want to test anything before post call
      console.log('rajjjjjj.......', result.current[1]);
  
      await waitFor(() => expect(result.current[1].isSuccess).toBe(true)); // this
      // Here we test condition after post call
      refreshToken=response.refreshToken
      accessToken=response.accessToken
      console.log('latest access token save',refreshToken)
      console.log('REFRESH TOKEN........',response.refreshToken)
      expect(response).toBeDefined();
       expect(response.id).toBe(1);
       expect(response.firstName).toBe('Emily')
       expect(response.accessToken).toBeDefined()
      expect(result.current[1].isLoading).toBe(false);
      expect(result.current[1].data).toBeDefined();
      expect(result.current[1].isSuccess).toBe(true);
      
  
      console.log('resulyuuuu...', result.current[1]);
    });
 //////// REFRESH TOKEN API TEST ////////


 //useGetRefreshTokenMutation

 it('post method refresh token test case add product', async () => {
 
  const {result} = renderHook(() => useGetRefreshTokenMutation(), {
    wrapper,
  });
  let response: any;
  const dataParams = {
      refreshToken:refreshToken,
      expiresInMins: 1
   };
  console.log('uuuu....', result.current);
  const [createUser] = result.current;
  await act(async () => {
    response = await createUser(dataParams)
      .unwrap()
      .catch(error => console.log('error', error));
  });
  // here if you want to test anything before post call
  console.log('rajjjjjj.......', result.current[1]);

  await waitFor(() => expect(result.current[1].isSuccess).toBe(true)); // this
  // Here we test condition after post call
  // accessToken1=response.accessToken
  // console.log('latest access token save',accessToken1)
  // expect(response).toBeDefined();
  //  expect(response.id).toBe(1);
  //  expect(response.firstName).toBe('Emily')
  //  expect(response.accessToken).toBeDefined()
  // expect(result.current[1].isLoading).toBe(false);
  expect(result.current[1].data).toBeDefined();
  // expect(result.current[1].isSuccess).toBe(true);
  

  console.log('resulyuuuu...', result.current[1]);
});


     // useGetUserDetailsQuery
     it('get method  for User details..', async () => {
    
      const {result} = renderHook(() => useGetUserDetailsQuery(accessToken), {
        wrapper,
      });
      //console.log('ARZOO RESULT..uuuu.......', result);
    
    
    const { data, error } = result.current;
    console.log('ARZOO RESULT..uuuu.......', result);
      const matchObject = {
        status: 'pending',
        endpointName: 'getUserDetails',
        requestId: result.current.requestId,
        originalArgs: '',
        startedTimeStamp: result.current.startedTimeStamp,
        isUninitialized: false,
        isLoading: true,
        isSuccess: false,
        isError: false,
        data: undefined,
        currentData: undefined,
        isFetching: true,
      };
  
      //here all the test case were called before promise call
  
    //   await waitFor(() => {
    //     expect(result.current.isSuccess).toBe(true)
    //     console.log('result 2.ff...userDetailsmmm....', result.current.isSuccess)
    //     console.log('result 2.ff.hhhhh......', result)
    //     console.log('response data......', result.current.data.products[0])
    //   //expect(result.current.isAuthenticated).toBeUndefined();
    // },{timeout:190000});

      await act(async () => {
        await waitFor(() => {
            expect(result.current.isSuccess).toBe(true)
            console.log('result 2.ff.......', result.current.isSuccess)
            console.log('result 2.ff.hhhhh......', result)
            console.log('response data......', result.current.data.products[0])
          //expect(result.current.isAuthenticated).toBeUndefined();
        },{timeout:190000});
      });
      expect(result.current.data).toBeDefined()
      // This test cases were called after fetch call or After Promise call
      expect(result.current.isLoading).toBe(false);
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.isError).toBe(false);
      expect(fetchMock).toBeCalledTimes(0);
      expect(result.current.isLoading).toBe(false);
   // }
    });
  
  });