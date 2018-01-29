import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from '../components/App';
import Button from '../components/Button';

beforeEach(() => {
  jest.resetModules();
});

describe('<Button />', () => {

  it('should change color when clicking the button', () => {
    const dangerStyle = 'bg-red-dark hover:bg-red-darker text-white font-bold py-2 px-4 rounded-full';
    const wrapper = mount(<Button onClick={() => {}} danger>Button</Button>);
    expect(wrapper.find("[data-test='button']").hasClass(dangerStyle)).toBeTruthy()
  })

  it('should update the page on button click to the bot-page', () => {
        const component = mount(<App />);
        const button = component.find('button');
        button.simulate('click');
        expect(component.state().currentPage).toEqual("bot");
  })

  it('should create a new post on button click', () => {
    
  })

  it('The button should toggle between the Talk to a real human button and Return to Forum button', () => {
      
  })


})
