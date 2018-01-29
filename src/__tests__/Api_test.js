import React from 'react';
import { render, mount, shallow } from 'enzyme';
import fakePosts from '../fakePosts';
import * as api from '../api/index';
import Posts from '../components/Posts';
import Comments from '../components/Comments';

beforeEach(() => {
 /*  jest.resetModules(); */
  const postInLocalStorage = localStorage.getItem('posts');
    if(!postInLocalStorage){
      localStorage.setItem('posts', JSON.stringify(fakePosts.data));
    }
});

afterEach(() => {
  /* localStorage.clear(); */
})


describe('ID', () => {
  it('should generate a unique ID containing 9 characters', () => {   
      expect(api.generateID()).toHaveLength(9);
  });
})

describe('<Posts />', () => {

  const fakeFunction = jest.fn()

  const fakePost = [{
    id: fakeFunction,
    title: "Titel igen by lovisa",
    content: "Content by lovisa",
    author: "lovisa",
    date: "2018-01-29"
  }]
 
  it('should create a new post object', () => {
    
  })

  it('should fetch all posts', () => {
    const allPosts = api.fetchAllPosts();
    expect(allPosts).toHaveLength(3);
  })   
    
})

describe('<Comments />', () => {

  const comment = [{
    id: fakeFunction,
    title: "Titel igen by lovisa",
    content: "Content by lovisa",
    author: "lovisa",
    date: "2018-01-29"
  }]

  it('should fetch all comments', () => {

  })

  it('should create comment object', () => {
    
  })

  it('should set comment object to localstorage', () => {
    
  })

  it('should remove a comment', () => {
    
  })

})

describe('<CurrentPersona />', () => {

  it('should fetch current persona', () => {
    
  })

  it('should fetch all personas', () => {
    
  })

  it('should store current persona in localStorage', () => {
    
  })
})

describe('<Bot />', () => {

  it('should generate a reply', () => {

  })

})