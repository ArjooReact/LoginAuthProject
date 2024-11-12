
import {test,jest} from '@jest/globals'
import {expect, it,describe,beforeEach} from '@jest/globals'
// it('renders hook', () => {
//     renderHook(() => useGetDataQuery('pikachu'));
//   });


import { renderHook,waitFor } from '@testing-library/react-native';

  import type { ReactNode } from 'react';
//import { renderHook, waitFor } from '@testing-library/react';
//import { Provider } from 'react-redux';
const Provider = require('react-redux');
import fetchMock from 'jest-fetch-mock';
import {store} from '../src/synchRedux/store/store'

import { useGetDataQuery } from "../src/api/GetAllApi";

function wrapper({ children }: { children: ReactNode }) {
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
    fetchMock.mockOnceIf(`https://fakestoreapi.com/products`, () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify({ data }),
      })
    );
  });

  it('renders hook', async () => {
    const { result } = renderHook(() => useGetDataQuery(''),{
        wrapper
    });

    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName,
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock).toBeCalledTimes(1);

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName,
      data,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: data,
      isFetching: false,
    });
  });
});
