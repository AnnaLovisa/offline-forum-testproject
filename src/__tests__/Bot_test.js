import React from 'react';
import { render, mount, shallow } from 'enzyme';
import MessageForm from '../components/Bot/MessageForm';
import Message from '../components/Bot/Message';
import Bot from '../components/Bot/Bot';
import TypingIndicator from '../components/Bot/TypingIndicator'; 
import * as api from '../api/index';

describe('<Bot />', () => {

  jest.useFakeTimers();

  function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }
  
  it('sendReply function should be called onsubmit', () => {
    const fakeSendReply = jest.fn();
    const component = mount(<MessageForm onSubmit={fakeSendReply} />)
    component.find('input[type="submit"]').simulate('submit');
    expect(fakeSendReply).toHaveBeenCalled();
  })

  it('a replymessage should be sent when message is submitted', () => {
    const component = mount(<Bot />)
    component.find(MessageForm).find('input[type="text"]').simulate('change', { target: { name: "userMessage", value: "this is a message"}})
    component.find(MessageForm).find('form').simulate('submit');

    jest.runAllTimers();

    component.instance().sendReply();
    return flushPromises().then(() => {
      expect(component.state().messages[1].bot).toBeTruthy();
    });
  })

  it('should render a message', () => {
    const component = mount(<Bot />)
    component.instance().onSubmit("This is a message");
    console.log(component.find('.h-64').children())
    expect(component.find('.h-64').html()).toContain("This is a message")
  })

  it('typing should change state to true when sendReply is called', () => {
    const wrapper = shallow(<Bot />)
    expect(wrapper.state().typing).toBe(false);
    wrapper.instance().sendReply();
    expect(wrapper.state().typing).toBe(true);
  })


  it('messageinput should change state on submit', () => {
    const message = "This is a message"
    const component = mount(<Bot />);
    component.instance().onSubmit(message);
    expect(component.state().messages[0]).toEqual({message: message, bot: false})
  })

  it('Second messageinput should not replace the first messageinput when set in state on submit', () => {
    const firstMessage = "This is a first message"
    const secondMessage = "This is second message"
    const component = mount(<Bot />);
    component.instance().onSubmit(secondMessage);
    expect(component.state().messages[0]).not.toEqual({message: firstMessage, bot: false})
  })

  })
