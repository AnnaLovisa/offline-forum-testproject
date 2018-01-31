import React from 'react';
import { render, mount, shallow } from 'enzyme';
import MessageForm from '../components/Bot/MessageForm';
import Message from '../components/Bot/Message';
import Bot from '../components/Bot/Bot';
import TypingIndicator from '../components/Bot/TypingIndicator'; 
import * as api from '../api/index';


describe('<Message />', () => {

  it('should have a className of white text-grey-darker if bot is true', () => {
    const className = "bg-white text-grey-darker";
    const component = mount(<Message bot={true} message="this is a message" />);
    expect(component.find('p').hasClass(className)).toEqual(true);
  })

  it('should have a className of indigo-dark text-white if bot is false', () => {
    const className = "bg-indigo-dark text-white";
    const component = mount(<Message bot={false} message="this is a message" />);
    expect(component.find('p').hasClass(className)).toEqual(true);
  })

})
