import React from 'react';
import { shallow } from 'enzyme';
import SingleComment from '../components/SingleComment';

describe('</SingleComment />', () => {

  it('delete button should show up if author is the same as currentPersona', () => {
    const wrapper = shallow(<SingleComment id="123" author="anna" onClick={jest.fn()} currentPersona="anna" comment="hej" date="2018-01-31" />)
    expect(wrapper.find('Button').length).toEqual(1)
  })

  it('delete button should not show up if author is not the same as currentPersona', () => {
    const wrapper = shallow(<SingleComment id="123" author="anna" onClick={jest.fn()} currentPersona="maja" comment="hej" date="2018-01-31" />)
    expect(wrapper.find('Button').length).toEqual(0)
  })

  it('should call the onClick-function in button', () => {
    const fakeClick = jest.fn();
    const wrapper = shallow(<SingleComment id="123" author="anna" onClick={fakeClick} currentPersona="anna" comment="hej" date="2018-01-31" />)
    expect(fakeClick).toHaveBeenCalledTimes(0);
    wrapper.find('Button').simulate('click');
    expect(fakeClick).toHaveBeenCalledTimes(1);
  })
  
})
