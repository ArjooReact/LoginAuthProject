import React from 'react';
//import {act} from 'react'
import {test, jest} from '@jest/globals';
import {expect, it, describe, beforeEach} from '@jest/globals';
import {renderHook, waitFor, act} from '@testing-library/react-native';
import type {ReactNode} from 'react';
import {Provider} from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import {store} from '../src/synchRedux/store/store';
import {useGetDataQuery, useAddNewPostMutation} from '../src/api/GetAllApi';
//const {data,isSuccess}=useGetDataQuery('products')
//jest.setTimeout(30000);

interface Userdata {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ratingType;
}
interface ratingType {
  rate: number;
  count: number;
}

const users: Userdata = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};
function wrapper({children}: {children: ReactNode}) {
  return <Provider store={store}>{children}</Provider>;
}

beforeEach(() => {
  fetchMock.resetMocks();
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
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

  it('get method test case..', async () => {
    const {result} = renderHook(() => useGetDataQuery(''), {
      wrapper,
    });

    console.log('ARZOO RESULT.........', result);

    const matchObject = {
      status: 'pending',
      endpointName: 'getData',
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
    expect(result.current).toMatchObject(matchObject);
    await waitFor(
      () => {
        //console.log('result 2........',result.current.data[0])
        expect(result.current.data).toBeDefined();
      },
      {timeout: 6000},
    );
    // expect(result.current.data).toBeDefined()
    // This test cases were called after fetch call or After Promise call
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.isError).toBe(false);
    expect(result.current.data[0]).toStrictEqual(users);
    expect(fetchMock).toBeCalledTimes(0);
    expect(result.current.isLoading).toBe(false);
  });

  /////// TEST CASE

  beforeEach(() => {
    fetchMock.mockOnceIf(`https://fakestoreapi.com`, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({data}),
      }),
    );
  });
  it('post method test case add product', async () => {
    // fetchMock.mockResponse(JSON.stringify(dataParams));

    const {result} = renderHook(() => useAddNewPostMutation(), {
      wrapper,
    });
    let response1: any;
    const dataParams = {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
    };
    console.log('uuuu....', result.current);
    const [createUser] = result.current;
    await act(async () => {
      response1 = await createUser(dataParams)
        .unwrap()
        .catch(error => console.log('error', error));
    });
    // here if you want to test anything before post call
    console.log('rajjjjjj.......', result.current[1]);

    await waitFor(() => expect(result.current[1].isSuccess).toBe(true)); // this
    // Here we test condition after post call
    expect(response1).toBeDefined();
    expect(response1.id).toBe(21);
    expect(result.current[1].isLoading).toBe(false);
    expect(result.current[1].data).toBeDefined();

    console.log('resulyuuuu...', result.current[1]);
  });
});
