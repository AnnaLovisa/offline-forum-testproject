import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Comment from '../components/Comments';
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

  })

  

});