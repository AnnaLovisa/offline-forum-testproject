import React from 'react';
import { render, mount, shallow } from 'enzyme';
import MessageForm from '../components/Bot/MessageForm';
import Message from '../components/Bot/Message';
import Bot from '../components/Bot/Bot';
import TypingIndicator from '../components/Bot/TypingIndicator'; 
import * as api from '../api/index';

describe('<Bot />', () => {
  
    it('sendReply function should be called onsubmit', () => {
      const fakeSendReply = jest.fn();
      const component = mount(<MessageForm onSubmit={fakeSendReply} />)
      component.find('input[type="submit"]').simulate('submit');
      expect(fakeSendReply).toHaveBeenCalled();
    })

    it('typing should change state to true when sendReply is called', () => {
      const wrapper = mount(<Bot />)
      expect(wrapper.state().typing).toBe(false);
      wrapper.instance().sendReply();
      expect(wrapper.state().typing).toBe(true);
    })
  
  })
