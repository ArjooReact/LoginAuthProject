import renderer from 'react-test-renderer'
import {test,jest} from '@jest/globals'
import {expect, it} from '@jest/globals'

//import { toHaveStyle } from "@testing-library/jest-native";
import CustomButton from '../src/components/TestFolder/CustomButton/CustomButton'
import { fireEvent, render, screen, userEvent } from '@testing-library/react-native';
//At the top of the file, renderer is imported from react-test-renderer, which provides a container (or wrapper) for our custom component.
//test defines the start of a new test case in Jest. Tests should be as small and concise as they can be, and they should only test one thing.

//react-test-renderer is deprecated. A warning will fire whenever calling ReactTestRenderer.create() or ReactShallowRender.render(). The react-test-renderer package will 
//remain available on NPM but will not be maintained and may break with new React features or changes to React’s internals.
//The React Team recommends migrating your tests to @testing-library/react or @testing-library/react-native for a modern and well supported testing experience.
//import { clickHandler } from '../src/components/TestFolder/LoginPage';
test('initial test for custom buttons',()=>{
    const AppRef=renderer.create(<CustomButton title='Submit' onClickHandler={()=>{console.log('clicked')}} />);
        console.log('arzoo test======',AppRef.toJSON())
        expect(AppRef.toJSON()).toBeTruthy();
})
// Writing test case for styles props
test('testing styles for button',()=>{
    const AppRef:any=renderer.create(<CustomButton title='Submit' onClickHandler={()=>{console.log('clicked')}} />);
    const styles = AppRef.toJSON().props.style;

  const { height, width, backgroundColor } = styles;
  console.log('Arzoo height....',height)
  expect(height).toBe(40)
  expect(width).toBe(180)
  expect(backgroundColor).toBe('skyblue')
})


/// All test cases using React testing Library........
test('testing styles for button',()=>{
    const clickHandler = jest.fn();
    const AppWrapper=render(<CustomButton title='Submit' onClickHandler={()=>{console.log('clicked')}}/>)
    console.log('*******RAJVEERR APPP**************',AppWrapper.toJSON())
    const btnId:any= screen.findByTestId('customButton')
    //expect(btnId('background').style.backgroundImage).toEqual(`url(${props.image})`)
    expect(btnId).toBeDefined()
   // fireEvent.press( screen.findByTestId('customButton'))
    fireEvent.press(screen.getByText('Submit'))
    expect(clickHandler).toHaveBeenCalledTimes(0)
    
})

test('testing styles for button styles using library',()=>{
    const clickHandler = jest.fn();
    const wrapper=render(<CustomButton title='Submit' onClickHandler={()=>{console.log('clicked')}}/>)
    const jsonData:any=wrapper.toJSON()
    const styles=jsonData.props.style
    const{width,height}=styles
    console.log('********Arzoo 2 Wrapper**************',width)
    const btnId:any= screen.findByTestId('customButton')
    //expect(btnId('background').style.backgroundImage).toEqual(`url(${props.image})`)
    expect(btnId).toBeDefined()
   // fireEvent.press( screen.findByTestId('customButton'))
   const pp=jsonData.children[0].children
   console.log('********Arzoo 2 Wrapper pp**************',pp)
    fireEvent.press(screen.getByText('Submit'))
    expect(clickHandler).toHaveBeenCalledTimes(0)
    expect(wrapper.getByText('Submit')).toBeDefined()
    expect(width).toBe(180)
    //expect(btnId).toHaveBeenCalledWith(jsonData.props)
    
})





