import React from 'react';
import { mount, shallow } from 'enzyme';
import MessageForm from '../components/Bot/MessageForm';
import Bot from '../components/Bot/Bot';

describe('<Bot />', () => {

  jest.useFakeTimers();

  function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
  }
  
  it('sendReply function should be called onsubmit', () => {
    const fakeSendReply = jest.fn();
    const wrapper = mount(<MessageForm onSubmit={fakeSendReply} />)
    wrapper.find('input[type="submit"]').simulate('submit');
    expect(fakeSendReply).toHaveBeenCalled();
  })

  it('a replymessage should be sent when message is submitted', () => {
    const wrapper = mount(<Bot />)
    wrapper.find(MessageForm).find('input[type="text"]').simulate('change', { target: { name: "userMessage", value: "this is a message"}})
    wrapper.find(MessageForm).find('form').simulate('submit');

    jest.runAllTimers();

    wrapper.instance().sendReply();
    return flushPromises().then(() => {
      expect(wrapper.state().messages[1].bot).toBeTruthy();
    });
  })

  it('should render a message', () => {
    const wrapper = mount(<Bot />)
    wrapper.instance().onSubmit("This is a message");
    expect(wrapper.find('.h-64').html()).toContain("This is a message")
  })

  it('typing should change state to true when sendReply is called', () => {
    const wrapper = shallow(<Bot />)
    expect(wrapper.state().typing).toBe(false);
    wrapper.instance().sendReply();
    expect(wrapper.state().typing).toBe(true);
  })


  it('messageinput should change state on submit', () => {
    const message = "This is a message"
    const wrapper = mount(<Bot />);
    wrapper.instance().onSubmit(message);
    expect(wrapper.state().messages[0]).toEqual({message: message, bot: false})
  })

  it('Second messageinput should not replace the first messageinput when set in state on submit', () => {
    const firstMessage = "This is a first message"
    const secondMessage = "This is second message"
    const wrapper = mount(<Bot />);
    wrapper.instance().onSubmit(secondMessage);
    expect(wrapper.state().messages[0]).not.toEqual({message: firstMessage, bot: false})
  })

  })
