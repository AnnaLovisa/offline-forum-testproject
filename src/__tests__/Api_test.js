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

  const fakePost = [{
    id: "123",
    title: "Titel by lovisa",
    content: "Content by lovisa",
    author: "lovisa",
    date: "2018-01-29"
  }]

  const title = "Winter"
  const content = "Winter is coming"
  const author = "Lovisa"

  beforeEach(() => {
    const postInLocalStorage = localStorage.getItem('posts');
      if(!postInLocalStorage){
        localStorage.setItem('posts', JSON.stringify(fakePosts.data));
      }
  });

  it('should create post object', () => {
    const newPost = api.createPostObject(title, content, author);
    expect(newPost).toMatchObject({title, content, author});
  })
 

  it('should fetch all posts that are stored in localStorage', () => {
    localStorage.setItem('posts', JSON.stringify(fakePosts));
    expect(api.fetchAllPosts()).toEqual(fakePosts);
  })

  it('should store post object in localStorage', () => {
    api.storePostObject(fakePost);
    const storedPost = JSON.parse(localStorage.getItem('posts'));
    expect(storedPost).toEqual(fakePost);
  })

  it('should remove post from localStorage', () => {
    const posts = api.fetchAllPosts()
    expect(posts).toHaveLength(3);
    api.removePost("45sfdf56");
    const newPostList = api.fetchAllPosts();
    expect(newPostList).toHaveLength(2);
  })
    
})

describe('<Comments />', () => {

  const comment = [
    {
      postId: "565ddy34",
      id: "16",
      author: "lovisa",
      onClick: jest.fn(),
      currentPersona: "lovisa",
      comment: "A comment by lovisa",
      date: "2018-01-29"
    },
    {
      postId: "56tytd234",
      id: "17",
      author: "anna",
      onClick: jest.fn(),
      currentPersona: "lovisa",
      comment: "A comment by anna",
      date: "2018-01-29"
    }
  ]

 beforeEach(() => {
      const commentInLocalStorage = localStorage.getItem('comments');
       if(!commentInLocalStorage){
         localStorage.setItem('comments', JSON.stringify(comment));
       }
   });

   it('should create a comment object', () => {

    const comment = "Comment about Winter"
    const postId = "565ddy34"
    const author = "Olle"

    const newComment = api.createCommentObject(comment, postId, author);

    expect(newComment.comment).toEqual(comment);
    expect(newComment.postId).toEqual(postId);
    expect(newComment.author).toEqual(author);
   })

  it('should fetch all comments from localStorage', () => {
    const allComments = api.fetchAllComments();
    expect(allComments).toHaveLength(2);
  })

})

/*it('should remove comment from localStorage', () => {
   
  })

}) */

describe('Personas', () => {

  beforeEach(() => {
    localStorage.clear();
  })
  
  afterEach(() => {
    localStorage.clear();
  })

  it('should fetch current persona from localStorage', () => {
    const personas = [{name: "anna"}, {name: "maja"}];
    localStorage.setItem('currentPersona', JSON.stringify(personas[1].name))
    const fetchedPerson = api.fetchCurrentPersona();
    expect(fetchedPerson).toEqual(personas[1].name);
  })

  it('should fetch all personas from localStorage', () => {
    const personas = [{name: "anna"}, {name: "maja"}];
    localStorage.setItem('personas', JSON.stringify(personas));
    const fetchedPersonas = api.fetchPersonas();
    expect(fetchedPersonas).toEqual(personas);
  })

  it('should return an empty array if no personas has been sent in localStorage', () => {
    expect(api.fetchPersonas()).toHaveLength(0);
  })

})
