import React from 'react';
import { render, mount, shallow } from 'enzyme';
import MessageForm from '../components/Bot/MessageForm';
import Message from '../components/Bot/Message';
import Bot from '../components/Bot/Bot';
import TypingIndicator from '../components/Bot/TypingIndicator'; 
import * as api from '../api/index';

describe('<MessageForm />', () => {
  
    it('should call the submit-button to send the message', () => {
      const fakeFunction = jest.fn();
      const component = mount(<MessageForm onSubmit={fakeFunction} />);
      component.simulate('submit', { preventDefault (){} });
      expect(fakeFunction).toHaveBeenCalled();
    })

    it('The message should be sent to state on change', () => {
      const component = mount(<MessageForm onSubmit={jest.fn()} />);
      const newMessage = {target: {name: "userMessage", value: "this is a new message from anna"}};
      component.find('input[name="userMessage"]').simulate('change', newMessage);
      expect(component.state().userMessage).toEqual("this is a new message from anna");
    })
  
  })

describe('<TypingIndicator />', () => {

  it('A typingindicator should appear when someone is typing', () => {
    const className = 'TypingIndicator bg-indigo-dark text-white font-bold px-4 h-8 rounded-full'
    const component = render(<TypingIndicator typing={true} />);
    expect(component.hasClass(className)).toBeTruthy();
  })

  it('A typingindicator should not appear when someone is not typing', () => {
    const className = 'TypingIndicator bg-indigo-dark text-white font-bold px-4 h-8 rounded-full'
    const component = render(<TypingIndicator typing={false} />);
    expect(component.hasClass(className)).toBeFalsy();
  })

})

