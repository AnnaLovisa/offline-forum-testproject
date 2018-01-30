import React from 'react';
import { render, mount, shallow } from 'enzyme';
import fakePosts from '../fakePosts';
import * as api from '../api/index';
import App from '../components/App';
import Posts from '../components/Posts';
import Comments from '../components/Comments';


beforeEach(() => {
  localStorage.clear();
})

afterEach(() => {
  localStorage.clear();
})


describe('ID', () => {
  it('should generate a unique ID containing 9 characters', () => {   
      expect(api.generateID()).toHaveLength(9);
  });
})

describe('<Posts />', () => {

  beforeEach(() => {
    /* jest.resetModules(); */
     const postInLocalStorage = localStorage.getItem('posts');
       if(!postInLocalStorage){
         localStorage.setItem('posts', JSON.stringify(fakePosts.data));
       }
   });

  const fakePost = [{
    id: jest.fn(),
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
    id: "16",
    author: "lovisa",
    onClick: jest.fn(),
    currentPersona: "lovisa",
    comment: "A comment by lovisa",
    date: "2018-01-29"
  }]

 beforeEach(() => {
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

describe('<App />', () => {

  it('should fetch current persona from localStorage', () => {
    const personas = [{name: "anna"}, {name: "maja"}];
    localStorage.setItem('currentPersona', JSON.stringify(personas[1].name))
    const fetchedPerson = api.fetchCurrentPersona();
    console.log(fetchedPerson);
    expect(fetchedPerson).toEqual(personas[1].name);
  })

  it('should fetch all personas from localStorage', () => {
    const personas = [{name: "anna"}, {name: "maja"}];
    localStorage.setItem('personas', JSON.stringify(personas));
    const fetchedPersonas = api.fetchPersonas();
    console.log(fetchedPersonas);
    expect(fetchedPersonas).toEqual(personas);
  })

  it('should store current persona in localStorage', () => {
    
  })
})

describe('<Bot />', () => {

  it('should generate a reply', () => {

  })

})