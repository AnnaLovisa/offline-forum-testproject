import React from 'react';
import { render, mount } from 'enzyme';
import MessageForm from '../components/Bot/MessageForm';
import TypingIndicator from '../components/Bot/TypingIndicator'; 

describe('<MessageForm />', () => {
  
    it('should call the submit-button to send the message', () => {
      const fakeFunction = jest.fn();
      const wrapper = mount(<MessageForm onSubmit={fakeFunction} />);
      wrapper.simulate('submit', { preventDefault (){} });
      expect(fakeFunction).toHaveBeenCalled();
    })

    it('The message should be sent to state on change', () => {
      const wrapper = mount(<MessageForm onSubmit={jest.fn()} />);
      const newMessage = {target: {name: "userMessage", value: "this is a new message from anna"}};
      wrapper.find('input[name="userMessage"]').simulate('change', newMessage);
      expect(wrapper.state().userMessage).toEqual("this is a new message from anna");
    })
  
  })

describe('<TypingIndicator />', () => {

  it('A typingindicator should appear when someone is typing', () => {
    const className = 'TypingIndicator bg-indigo-dark text-white font-bold px-4 h-8 rounded-full'
    const wrapper = render(<TypingIndicator typing={true} />);
    expect(wrapper.hasClass(className)).toBeTruthy();
  })

  it('A typingindicator should not appear when someone is not typing', () => {
    const className = 'TypingIndicator bg-indigo-dark text-white font-bold px-4 h-8 rounded-full'
    const wrapper = render(<TypingIndicator typing={false} />);
    expect(wrapper.hasClass(className)).toBeFalsy();
  })

})

