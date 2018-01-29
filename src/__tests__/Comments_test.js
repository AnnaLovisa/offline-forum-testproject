import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Comments from '../components/Comments';
import * as api from '../api/index';

beforeEach(() => {
  jest.resetModules();
});

describe('<Comments />', () => {

  const fakeComment = [{
    postId: "45sfdf56",
    author: "Morgana",
    id: "18"
  }]

  beforeEach(() => {
    localStorage.clear();
    jest.resetModules();
  });

  it('should set the stored comments in state', () => {
    const component = mount(<Comments currentPersona="anna" postId="45sfdf56" />)
    component.setState({ comments: fakeComment })
    expect(component.state().comments).toBe(fakeComment)
  })

  it('should return all comments that are stored in localStorage', () => {
    localStorage.setItem('comments', JSON.stringify(fakeComment));
    expect(api.fetchAllComments()).toEqual(fakeComment);
  })

  it('should remove comment', () => {
    localStorage.setItem('comments', JSON.stringify(fakeComment));
    const component = mount(<Comments currentPersona="anna" postId="45sfdf56" />)
    component.instance().setCommentsFromLocalStorage();
    expect(component.state().comments).not.toEqual([]);
    component.instance().removeComment("18");
    expect(component.state().comments).toEqual([]);
  })

})

