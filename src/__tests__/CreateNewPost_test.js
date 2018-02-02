import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Posts from '../components/Posts';
import CreateNewPost from '../components/CreateNewPost';
import * as api from '../api/index';

beforeEach(() => {
  jest.resetModules();
  localStorage.clear();
});

describe('<CreateNewPost />', () => {

  const fakePost = {
    title: "annas post",
    content: "annas content",
    id: jest.fn(),
    author: "anna",
    date: jest.fn()
  }

  it('the submitbutton should be called', () => {
    const fakeFunction = jest.fn();
    const component = mount(<CreateNewPost author="anna" updatePosts={fakeFunction} />);
    expect(fakeFunction).not.toHaveBeenCalled();
    component.simulate('submit', {preventDefault () {}});
    expect(fakeFunction).toHaveBeenCalled();
  })


  it('should set the inputvalues in state onchange and empty them after submit', () => {
    const component = mount(<CreateNewPost author="anna" updatePosts={jest.fn()} onChange={jest.fn()} />);

    const title = {target: {name: "title", value: fakePost.title}}
    component.find('input[name="title"]').simulate('change', title);
    expect(component.state().title).toBe("annas post");

    const content = {target: {name: "content", value: fakePost.content}}
    component.find('textarea[name="content"]').simulate('change', content);
    expect(component.state().content).toEqual("annas content");

    component.find('form').simulate('submit', jest.fn());
    expect(component.state().title).toBe("");
    expect(component.state().content).toBe("");
  })


})
