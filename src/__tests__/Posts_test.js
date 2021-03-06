import React from 'react';
import { mount, shallow } from 'enzyme';
import fakePosts from '../fakePosts'
import Posts from '../components/Posts';
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
    const wrapper = shallow(<Posts name="posts" currentPersona="anna"/>)
    expect(wrapper).toHaveLength(1);
  });

  it('renders props correctly', () => {
    const wrapper = shallow(<Posts name="posts" currentPersona="anna" />)
    expect(wrapper.instance().props.name).toBe('posts');
    expect(wrapper.instance().props.currentPersona).toBe('anna');
  });

  it('includes 1 formelement with className of container mx-auto flex flex-col p-6', () => {
    const className = 'container mx-auto flex flex-col p-6';
    const wrapper = mount(<Posts name="posts" currentPersona="anna" />)
    expect(wrapper.find("[data-test='form']").hasClass(className)).toBeTruthy()
  });

  it('sets the stored posts from localStorage to state', () => {
    const wrapper = mount(<Posts currentPersona="anna" />)
    wrapper.setState({ posts: fakePost })
    const post = localStorage.setItem('posts', JSON.stringify(fakePost));
    expect(api.fetchAllPosts()).toEqual(wrapper.state().posts);
  })

  it('should remove posts with the same postid as in statement', () => {
    const wrapper = mount(<Posts currentPersona="anna" author="anna" />)
    localStorage.setItem('posts', JSON.stringify(fakePost));
    wrapper.instance().setPostFromLocalStorage();
    expect(wrapper.state().posts).toHaveLength(2);
    wrapper.instance().removePost("8");
    expect(wrapper.state().posts).toHaveLength(1);
  })

})







