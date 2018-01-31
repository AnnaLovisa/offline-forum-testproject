import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Posts from '../components/Posts';
import CreateNewPost from '../components/CreateNewPost';
import * as api from '../api/index';

beforeEach(() => {
  jest.resetModules();
});

describe('<CreateNewPost />', () => {

  const fakePost = [{
    title: "annas post",
    content: "annas content",
    id: jest.fn(),
    author: "anna",
    date: jest.fn()
  }]

  it('should create a new post on submit and store it in localStorage', () => {
    /* const component = shallow(<CreateNewPost author="anna" updatePosts={jest.fn()} />); */
    /* component.setState({title: fakePost.title, content: fakePost.content}); */
    /* const newPost = api.createPostObject(fakePost.title, fakePost.content, fakePost.author);
    const storePost = api.storePostObject(newPost); */
  })

  it('should put the inputvalues in state on submit', () => {
    /* const component = mount(<CreateNewPost author="anna" updatePosts={jest.fn()} onSubmit={() => {}} />);
    component.setState({title: fakePost.title, content: fakePost.content}); */
    //kolla längden på posterna i localStorage först
    //simulera on submit
    //kolla längden igen om en till post lagts till med värden från statet
  })

/*   it('should render out the values that are typed in the inputfields when creating a new post', () => {
    
  })
    
  it('should not be created if nothing is typed in the inputfields', () => {
    
  }) */

})
