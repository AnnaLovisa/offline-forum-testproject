import React from 'react';
import { render, mount, shallow } from 'enzyme';
import SinglePost from '../components/SinglePost';

beforeEach(() => {
  jest.resetModules();
});

describe('<SinglePost />', () => {

  it('delete button should show up if author is the same as currentPersona', () => {
    const wrapper = mount(<SinglePost title="enTitel" content="liteContent" id="123" author="anna" currentPersona="anna" date="2018-01-31" onClick={jest.fn()} />)
    expect(wrapper.find('Button').length).toEqual(1)
  })
    
  it('delete button should not show up if author is not the same as currentPersona', () => {
    const wrapper = mount(<SinglePost title="enTitel" content="liteContent" id="123" author="maja" currentPersona="anna" date="2018-01-31" onClick={jest.fn()} />)
    expect(wrapper.find('Button').length).toEqual(0)
  })
    
  it('should call the onClick-function in button', () => {
    const fakeClick = jest.fn();
    const wrapper = shallow(<SinglePost title="enTitel" content="liteContent" id="123" author="anna" currentPersona="anna" date="2018-01-31" onClick={fakeClick} />)
    expect(fakeClick).toHaveBeenCalledTimes(0);
    wrapper.find('Button').simulate('click');
    expect(fakeClick).toHaveBeenCalledWith("123");
  })

})

