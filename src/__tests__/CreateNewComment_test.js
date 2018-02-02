import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Comments from '../components/Comments';
import CreateNewComment from '../components/CreateNewComment';
import * as api from '../api/index';

describe('<CreateNewComment />', () => {

  it('the submitbutton should be called', () => {
    const fakeFunction = jest.fn();
    const component = mount(<CreateNewComment postId="45sfdf56" author="anna" updateComments={fakeFunction} />);
    expect(fakeFunction).not.toHaveBeenCalled();
    component.simulate('submit', {preventDefault () {}});
    expect(fakeFunction).toHaveBeenCalled();
  })
  
  it('should set the inputvalues in state onchange', () => {
    const fakeFunction = jest.fn();
    const textComment = "annas comment";
    const component = mount(<CreateNewComment postId="45sfdf56" author="anna" updateComments={fakeFunction} />);

    const comment = {target: {name: "comment", value: textComment}}
    component.find('textarea[name="comment"]').simulate('change', comment);
    expect(component.state().comment).toEqual("annas comment");

    component.find('form').simulate('submit', jest.fn());
    expect(component.state().comment).toBe("");
  })

  it('should create comments that belong to a specific post', () => {
    const fakeFunction = jest.fn();
    const component = mount(<CreateNewComment postId="" author="" updateComments={fakeFunction}  />)
    const textComment = "hejhej"

    const comment = {target: {name: "comment", value: textComment}}
    component.find('textarea[name="comment"]').simulate('change', comment);
    component.find('form').simulate('submit');
    expect(component.state().comment).toBe("");

  })

  it('should store ')

});
