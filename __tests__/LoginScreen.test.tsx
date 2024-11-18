import renderer from 'react-test-renderer';
import {test, jest, describe} from '@jest/globals';
import {expect, it, beforeEach} from '@jest/globals';
import LoginScreen from '../src/components/Login/LoginScreen';
import {useUserDataContext} from '../src/storage/ContextProviderStorage/ContextHooks/useUserDataContext';

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
  test('initial test for custom buttons', () => {
    const AppRef = renderer.create(<LoginScreen title="Submit" />);
    console.log('arzoo test======', AppRef.toJSON());
    expect(AppRef.toJSON()).toBeTruthy();
  });
  test('hhhhhhh nnnnnnn ooooooooooo', () => {});
});
