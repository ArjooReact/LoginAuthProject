// import renderer from 'react-test-renderer'
// import {test,jest, describe} from '@jest/globals'
// import {expect, it} from '@jest/globals'
// import { showMessage } from 'react-native-flash-message';
// //import { toHaveStyle } from "@testing-library/jest-native";
// import { fireEvent, render, screen, userEvent } from '@testing-library/react-native';
// import LoginScreen from '../src/components/Login/LoginScreen';
// import { useSelector, useDispatch } from 'react-redux'; 
// import { useGetSignInMutation } from '../src/rtk/api/LoginApi';
// import { useUserDataContext } from '../src/storage/ContextProviderStorage/ContextHooks/useUserDataContext';
// jest.mock('@react-native-async-storage/async-storage', () =>
//     require('@react-native-async-storage/async-storage/jest/async-storage-mock')
//   );

// jest.mock('react-native-flash-message', () => 'showMessage');
// const mockedNavigation = jest.fn();

// //jest.mock('../src/rtk/api/LoginApi', () => 'useGetSignInMutation');


// jest.mock('@react-navigation/native', () => {
//   return {
//     useNavigation: () => ({
//       navigate: mockedNavigation,
//     }),
//   };
// });



// const mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
//   useDispatch: () => mockDispatch
// }));

 
// jest.mock('../src/storage/ContextProviderStorage/ContextHooks/useUserDataContext');

// const mockUseClientRect = jest.mocked(useUserDataContext);

// jest.mock('../src/storage/ContextProviderStorage/ContextHooks/useUserDataContext', () => ({
//   useUserDataContext: () => [300, 200, jest.fn()]
// }));

// jest.mock('react-redux', () => ({
//   useSelector: () => [300, 200, jest.fn()]
// }));

// jest.mock('react-redux', () => ({
//   useDispatch: () => [300, 200, jest.fn()]
// }));

// jest.mock('../src/rtk/api/LoginApi', () => ({
//   useGetSignInMutation: () => [300, 200, jest.fn()]
// }));

// describe('all mock',()=>{

//   afterEach(() => {
//     useSelector.mockClear();
//   });
//   test('initial test for custom buttons',()=>{

//     const mockData = {
//       id: 1,
//       name: 'John Doe',
//       email: 'johndoe@example.com'
//     };
   
//       const AppRef=renderer.create(<LoginScreen title='Submit'/>);
//           console.log('arzoo test======',AppRef.toJSON())
//           expect(AppRef.toJSON()).toBeTruthy();
//   })
//   test('hhhhhhh nnnnnnn ooooooooooo',()=>{
  
//   })
// })


///////////  ENZYME SAMPLE /////////////////////


// import { shallow } from  'enzyme'
// //const {shallow}= require('enzyme')
// import {expect, it, describe, beforeEach,afterEach} from '@jest/globals';
// import LoginScreen from '../src/components/Login/LoginScreen';
// import {test, jest} from '@jest/globals';
// jest.mock('@react-native-async-storage/async-storage', () =>
//        require('@react-native-async-storage/async-storage/jest/async-storage-mock')
//      );

//  jest.mock('react-native-flash-message', () => 'showMessage');
//  const mockedNavigation = jest.fn();
//  describe('<MyComponent />', () => {
   
//   it('should render three <Foo /> components', () => {
//     const wrapper = shallow(<LoginScreen />);
//     console.log(wrapper)
//    // expect(wrapper.find(Foo)).to.have.length(3);
//   });
 
// });