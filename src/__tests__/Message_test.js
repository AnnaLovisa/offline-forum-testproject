import React from 'react';
import { shallow } from 'enzyme';
import Message from '../components/Bot/Message';


describe('<Message />', () => {

  it('should have a className of white text-grey-darker if bot is true', () => {
    const className = "bg-white text-grey-darker";
    const wrapper = shallow(<Message bot={true} message="this is a message" />);
    expect(wrapper.find('p').hasClass(className)).toEqual(true);
  })

  it('should have a className of indigo-dark text-white if bot is false', () => {
    const className = "bg-indigo-dark text-white";
    const wrapper = shallow(<Message bot={false} message="this is a message" />);
    expect(wrapper.find('p').hasClass(className)).toEqual(true);
  })

})
