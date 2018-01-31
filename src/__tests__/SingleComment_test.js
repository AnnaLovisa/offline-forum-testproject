import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Comments from '../components/Comments';
import SingleComment from '../components/SingleComment';
import Button from '../components/Button';

describe('</SingleComment />', () => {

  it('delete button should show up if author is the same as currentPersona', () => {
    const component = mount(<SingleComment id="123" author="anna" onClick={jest.fn()} currentPersona="anna" comment="hej" date="2018-01-31" />)
    expect(component.find('Button').length).toEqual(1)
  })

  it('delete button should not show up if author is not the same as currentPersona', () => {
    const component = mount(<SingleComment id="123" author="anna" onClick={jest.fn()} currentPersona="maja" comment="hej" date="2018-01-31" />)
    expect(component.find('Button').length).toEqual(0)
  })

  it('should call the onClick-function in button', () => {
    const fakeClick = jest.fn();
    const component = mount(<SingleComment id="123" author="anna" onClick={fakeClick} currentPersona="anna" comment="hej" date="2018-01-31" />)
    expect(fakeClick).toHaveBeenCalledTimes(0);
    component.find('Button').simulate('click');
    expect(fakeClick).toHaveBeenCalledTimes(1);
  })
})
