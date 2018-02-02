import React from 'react';
import { mount } from 'enzyme';
import Comments from '../components/Comments';
import * as api from '../api/index';

beforeEach(() => {
  jest.resetModules();
});

describe('<Comments />', () => {

  const fakeComment = [
    {
      postId: "45sfdf56",
      author: "Morgana",
      id: "18",
      comment: "Comment 1",
      currentPersona: "anna",
      date: "2018-09-20"
    },
    {
      postId: "56tytd234",
      author: "Zac",
      id: "19",
      comment: "Comment 2",
      currentPersona: "anna",
      date: "2018-09-20"
      }

]

  beforeEach(() => {
    localStorage.clear();
    jest.resetModules();
  });

  it('should set the stored comments in state', () => {
    const wrapper = mount(<Comments currentPersona="anna" postId="45sfdf56" author="Morgana" date="2018-09-20" comment />)
    wrapper.setState({ comments: fakeComment })
    expect(wrapper.state().comments).toBe(fakeComment)
  })

  it('should return all comments that are stored in localStorage', () => {
    localStorage.setItem('comments', JSON.stringify(fakeComment));
    expect(api.fetchAllComments()).toEqual(fakeComment);
  })

  it('should remove comment', () => {
    localStorage.setItem('comments', JSON.stringify(fakeComment));
    const wrapper = mount(<Comments currentPersona="anna" postId="45sfdf56" author="Morgana" date="2018-09-20" comment />)
    wrapper.instance().setCommentsFromLocalStorage();
    expect(wrapper.state().comments).not.toEqual([]);
    wrapper.instance().removeComment("18");
    expect(wrapper.state().comments).toEqual([]);
  })

})

