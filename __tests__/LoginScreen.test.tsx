import renderer from 'react-test-renderer';
import {
  fireEvent,
  render,
  screen,
  userEvent,
} from '@testing-library/react-native';
import {test, jest, describe} from '@jest/globals';
import {expect, it, beforeEach} from '@jest/globals';
import LoginScreen from '../src/components/Login/LoginScreen';
import {useUserDataContext} from '../src/storage/ContextProviderStorage/ContextHooks/useUserDataContext';
import { useGetSignInMutation } from '../src/rtk/api/LoginApi';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native-flash-message', () => 'showMessage');
const mockedNavigation = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock(
  '../src/storage/ContextProviderStorage/ContextHooks/useUserDataContext',
);
let mockData = {
  userName: 'arjoo',
  userPassword: '123456',
};
const mockUseClientRect = jest.mocked(useUserDataContext);

jest.mock(
  '../src/storage/ContextProviderStorage/ContextHooks/useUserDataContext',
  () => ({
    useUserDataContext: () => [300, 200, jest.fn()],
  }),
);

jest.mock('react-redux', () => ({
  useDispatch: () => [300, 200, jest.fn()],
}));

const mockDispatch = jest.fn();
const mockSelector = jest.fn();


jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector,
}));

jest.mock('../src/rtk/api/LoginApi', () => ({
  useGetSignInMutation: () => [300, 200, jest.fn()],
}));


describe('all mock', () => {
  mockSelector.mockImplementationOnce((callback: any) => {
    console.log('CALL BACK...', callback);
    return callback(mockData);
  });
  let value: number = 1;
  let htmlWrapper: any;
 
  test('initial test for custom buttons', () => {
    const AppRef = renderer.create(<LoginScreen title="Submit" />);
    console.log('arzoo test======', AppRef.toJSON());
    let props: any = AppRef.toJSON();
    console.log('Props.....', props?.children[0].children);
    htmlWrapper = props?.children[0].children;
    console.log('HTML WRAPPER.....', htmlWrapper);
    console.log('Second Text Wrapper......', htmlWrapper[1]);
    expect(AppRef.toJSON()).toBeTruthy();
  });

  test('testCase for useSelector', () => {
    const wrapper = render(<LoginScreen title="Submit"></LoginScreen>);
    const txtId: any = screen.findByTestId('arzooText');
    console.log('text content.jj..', txtId);
    mockSelector((val: any, err: any) => {
      expect(val).toEqual(mockData);
    });
  });
   
});
