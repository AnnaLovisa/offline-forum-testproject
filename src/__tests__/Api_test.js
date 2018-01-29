import React from 'react';
import { render, mount, shallow } from 'enzyme';
import fakePosts from '../fakePosts';
import * as api from '../api/index';
import Posts from '../components/Posts';
import Comments from '../components/Comments';


afterEach(() => {
  /* localStorage.clear(); */
})


describe('ID', () => {
  it('should generate a unique ID containing 9 characters', () => {   
      expect(api.generateID()).toHaveLength(9);
  });
})

describe('<Posts />', () => {

  beforeEach(() => {
    /*  jest.resetModules(); */
     const postInLocalStorage = localStorage.getItem('posts');
       if(!postInLocalStorage){
         localStorage.setItem('posts', JSON.stringify(fakePosts.data));
       }
   });

  const fakeFunction = jest.fn()

  const fakePost = [{
    id: fakeFunction,
    title: "Titel igen by lovisa",
    content: "Content by lovisa",
    author: "lovisa",
    date: "2018-01-29"
  }]
 

  it('should fetch all posts', () => {
    const allPosts = api.fetchAllPosts();
    expect(allPosts).toHaveLength(3);
  })
    
})

describe('<Comments />', () => {

  const comment = [{
    postId: "565ddy34",
    author: "Esmeralda",
    updateComment: jest.fn(),
    id: "16"
  /*  author: "lovisa",
    onClick: jest.fn(),
    currentPersona: "lovisa",
    comment: "A comment by lovisa",
    date: "2018-01-29" */
  }]

  beforeEach(() => {
    /*  jest.resetModules(); */
     const commentInLocalStorage = localStorage.getItem('comments');
       if(!commentInLocalStorage){
         localStorage.setItem('comments', JSON.stringify(comment));
       }
   });

  it('should fetch all comments', () => {
    const allComments = api.fetchAllComments();
    expect(allComments).toHaveLength(1);
  })


})

describe('<CurrentPersona />', () => {

  beforeEach(() => {
    /*  jest.resetModules(); */
     const personaInLocalStorage = localStorage.getItem('personas');
       if(!personaInLocalStorage){
         localStorage.setItem('personas', JSON.stringify(persona));
       }
   });

  it('should fetch current persona', () => {
    const persona = api.fetchCurrentPersona();
    expect(component.instance().props.currentPersona).toBe(persona);
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