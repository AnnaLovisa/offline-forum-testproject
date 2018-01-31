import React from 'react';
import { render, mount, shallow } from 'enzyme';
import fakePosts from '../fakePosts'
import Posts from '../components/Posts';
import CreateNewPost from '../components/CreateNewPost';
import * as api from '../api/index';



describe('<Posts />', () => {

  const fakePost = [
    {
      id: "8",
      title: "Titel by anna",
      content: "Content by anna",
      author: "anna",
      date: "2018-01-29"
    },
    {
      id: "9",
      title: "Titel by maja",
      content: "Content by maja",
      author: "maja",
      date: "2018-01-29"
    }
  ];

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('renders 1 <Posts /> component', () => {
    const component = shallow(<Posts name="posts" currentPersona="anna"/>)
    expect(component).toHaveLength(1);
  });

  it('renders props correctly', () => {
    const component = shallow(<Posts name="posts" currentPersona="anna" />)
    expect(component.instance().props.name).toBe('posts');
    expect(component.instance().props.currentPersona).toBe('anna');
  });

  it('includes 1 formelement with className of container mx-auto flex flex-col p-6', () => {
    const className = 'container mx-auto flex flex-col p-6';
    const component = mount(<Posts name="posts" currentPersona="anna" />)
    expect(component.find("[data-test='form']").hasClass(className)).toBeTruthy()
  });

 /*  it('sets the stored posts from localStorage to state', () => {
    const component = mount(<Posts currentPersona="anna" />)
    component.setState({ posts: fakePost })
    console.log(component.state().posts);
    const post = localStorage.setItem('posts', JSON.stringify(fakePost));
    console.log(post);
    expect(api.fetchAllPosts()).toEqual(component.state().posts);
  }) */

/*   it('should remove post', () => {
    localStorage.setItem('posts', JSON.stringify(fakePost));
    const component = mount(<Posts currentPersona="anna" />)
    expect(component.state().posts).not.toEqual([]);
    component.instance().removePost("8");
    expect(component.state().posts).toEqual([]);
  }) */

})







