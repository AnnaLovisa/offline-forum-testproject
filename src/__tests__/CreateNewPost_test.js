import React from 'react';
import { mount, shallow } from 'enzyme';
import CreateNewPost from '../components/CreateNewPost';

beforeEach(() => {
  localStorage.clear();
});

describe('<CreateNewPost />', () => {

  const fakePost = {
    title: "annas post",
    content: "annas content",
    id: "123",
    author: "anna",
    date: "2018-01-26"
  }

  it('the submitbutton should be called', () => {
    const fakeFunction = jest.fn();
    const wrapper = mount(<CreateNewPost author="anna" updatePosts={fakeFunction} />);
    expect(fakeFunction).not.toHaveBeenCalled();
    wrapper.simulate('submit', {preventDefault () {}});
    expect(fakeFunction).toHaveBeenCalled();
  })


  it('should set the inputvalues in state onchange and empty them after submit', () => {
    const wrapper = mount(<CreateNewPost author="anna" updatePosts={jest.fn()} onChange={jest.fn()} />);

    const title = {target: {name: "title", value: fakePost.title}}
    wrapper.find('input[name="title"]').simulate('change', title);
    expect(wrapper.state().title).toBe("annas post");

    const content = {target: {name: "content", value: fakePost.content}}
    wrapper.find('textarea[name="content"]').simulate('change', content);
    expect(wrapper.state().content).toEqual("annas content");

    wrapper.find('form').simulate('submit', {preventDefault () {}});
    expect(wrapper.state().title).toBe("");
    expect(wrapper.state().content).toBe("");
  })


})
