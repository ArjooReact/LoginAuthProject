import React from 'react';
import LoginPage from '../src/components/TestFolder/LoginPage';
import renderer from 'react-test-renderer';
import {expect, it} from '@jest/globals';
import {test, jest} from '@jest/globals';
import {sum} from '../src/components/TestFolder/LoginPage';
import {doFetch} from '../src/components/TestFolder/LoginPage';
//import { fireEvent, render } from "@testing-library/react-native";

import {
  fireEvent,
  render,
  screen,
  userEvent,
} from '@testing-library/react-native';
//import { render } from '@testing-library/react-native';
import {LoginScreenTypes} from '../src/components/Login/LoginScreenTypes';
//import {render,screen} from '@testing-library/react'
//import axios from 'axios';
// test('login initial test case',()=>{
//     const AppRef=renderer.create(<LoginPage />);
//     console.log('arzoo test======',AppRef.toJSON())
//     expect(AppRef.getInstance()?.findByType('text')).toBeCalled()
// })
const {debug, getByTestId, getByText, getAllByTestId, queryByText} = render(
  <LoginPage />,
);

test('login initial test case', () => {
  render(<LoginPage></LoginPage>);
  const btnElement = screen.getByTestId('text1');
  expect(btnElement).toBeDefined();
  // userEvent.
});

test('login button test case', () => {
  render(<LoginPage></LoginPage>);
  const btnElement = screen.getByRole('button');
  expect(btnElement).toBeDefined();
  // expect(btnElement).toBeTruthy()
  // userEvent.
});

test('login button press page', () => {
  render(<LoginPage></LoginPage>);
  const btnElement = screen.getByRole('button');
  //fireEvent.press(screen.queryByText('arzoo'))
  //fireEvent.press(screen)
});

test('login button press page', () => {
  render(<LoginPage></LoginPage>);
  const btnElement = screen.getByRole('button');
  fireEvent.press(screen.getByText('submit'));
  //fireEvent.press(screen)
});

test('testing of Sum function==', () => {
  const wrapper = render(<LoginPage></LoginPage>);
  // console.log('********Login Object**********',wrapper)
  expect(sum(3, 6)).toBe(9);
});

test('testing of fetchData function==', () => {
  const fetchDataMock = jest.fn();
  const wrapper = render(<LoginPage></LoginPage>);
  // console.log('********Login Object**********',wrapper)
  fireEvent.press(screen.getByText('submit'));
  expect(fetchDataMock).toHaveBeenCalledTimes(0);
  // expect(fetchDataMock).toHaveBeenCalledTimes(0)
});
test('testing axios value..', async () => {
  const axios = require('axios');
  jest.mock('axios');
  interface  Userdata{
    id:number,
    title:string
    price:number
    description:string
    category:string
    image:string
    rating:ratingType
  }
  interface ratingType{
    rate:number
    count:number
  }
  const users:Userdata = 
    {
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
    }
  ;
  axios.get.mockResolvedValueOnce(users)
  return doFetch().then(data => {
    expect(data.data[0]).toStrictEqual(users);
  });
});
