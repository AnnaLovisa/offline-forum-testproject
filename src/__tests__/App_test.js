import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from '../components/App';
import Button from '../components/Button';
import * as api from '../api/index';
import CreateNewPost from '../components/CreateNewPost';
import Posts from '../components/Posts';

//Shallow renders a component and shows the object-structure with the props and state
//Mount is used for interactive with the DOM


describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App name="app" />)
    //Checking for the length of objects in the App-component, or what length??????
    expect(component).toHaveLength(1);
  });
  it('renders props correctly', () => {
    const component = shallow(<App name="app" />)
    expect(component.instance().props.name).toBe('app');
  });
  it('renders <App /> with state', () => {
    const component = shallow(<App currentPersona='anna'/>)
    expect(component.instance().props.currentPersona).toBe('anna');
  })
})







