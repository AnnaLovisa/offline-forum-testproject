import React from 'react';
import { mount } from 'enzyme';
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
    const wrapper = mount(<App />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.state().currentPage).toEqual("bot");
  })

  it('should update the page on button click to the home-page', () => {
    const wrapper = mount(<App />);
    const button = wrapper.find('button');
    button.simulate('click');
    button.simulate('click');
    expect(wrapper.state().currentPage).toEqual("home");
  })



})
