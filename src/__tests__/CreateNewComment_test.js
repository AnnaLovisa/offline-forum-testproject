import React from 'react';
import { render, mount, shallow } from 'enzyme';
import CreateNewComment from '../components/CreateNewComment';

describe('<CreateNewComment />', () => {

  it('the submitbutton should be called', () => {
    const fakeFunction = jest.fn();
    const wrapper = mount(<CreateNewComment postId="45sfdf56" author="anna" updateComments={fakeFunction} />);
    expect(fakeFunction).not.toHaveBeenCalled();
    wrapper.simulate('submit', {preventDefault () {}});
    expect(fakeFunction).toHaveBeenCalled();
  })
  
  it('should set the inputvalues in state onchange', () => {
    const fakeFunction = jest.fn();
    const textComment = "annas comment";
    const wrapper = mount(<CreateNewComment postId="45sfdf56" author="anna" updateComments={fakeFunction} />);

    const comment = {target: {name: "comment", value: textComment}}
    wrapper.find('textarea[name="comment"]').simulate('change', comment);
    expect(wrapper.state().comment).toEqual("annas comment");

    wrapper.find('form').simulate('submit', {preventDefault () {}});
    expect(wrapper.state().comment).toBe("");
  })

  it('should create comments that belong to a specific post', () => {
    const fakeFunction = jest.fn();
    const wrapper = mount(<CreateNewComment postId="" author="" updateComments={fakeFunction}  />)
    const textComment = "hejhej"

    const comment = {target: {name: "comment", value: textComment}}
    wrapper.find('textarea[name="comment"]').simulate('change', comment);
    wrapper.find('form').simulate('submit', {preventDefault () {}});
    expect(wrapper.state().comment).toBe("");

  })

});
