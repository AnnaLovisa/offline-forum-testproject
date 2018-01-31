import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Posts from '../components/Posts';
import SinglePost from '../components/SinglePost';
import * as api from '../api/index';

beforeEach(() => {
  jest.resetModules();
});

describe('<SinglePost />', () => {

  it('delete button should show up if author is the same as currentPersona', () => {
    const component = mount(<SinglePost title="enTitel" content="liteContent" id="123" author="anna" currentPersona="anna" date="2018-01-31" onClick={jest.fn()} />)
    expect(component.find('Button').length).toEqual(1)
  })
    
  it('delete button should not show up if author is not the same as currentPersona', () => {
    const component = mount(<SinglePost title="enTitel" content="liteContent" id="123" author="maja" currentPersona="anna" date="2018-01-31" onClick={jest.fn()} />)
    expect(component.find('Button').length).toEqual(0)
  })
    
  it('should call the onClick-function in button', () => {
    const fakeClick = jest.fn();
    const component = mount(<SinglePost title="enTitel" content="liteContent" id="123" author="anna" currentPersona="anna" date="2018-01-31" onClick={fakeClick} />)
    expect(fakeClick).toHaveBeenCalledTimes(0);
    component.find('Button').simulate('click');
    expect(fakeClick).toHaveBeenCalledTimes(1);
  })
})
