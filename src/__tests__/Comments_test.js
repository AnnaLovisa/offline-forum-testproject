import React from 'react';
import { render, mount, shallow } from 'enzyme';
import Comment from '../components/Comments';
import * as api from '../api/index';

beforeEach(() => {
  jest.resetModules();
});

describe('<Comments />', () => {

  it('renders 1 <Comments /> component', () => {
/*     const component = shallow(<Comment name="comments" currentPersona="anna"/>)
    //Checking for the length of objects in the Posts-component, or what length??????
    expect(component).toHaveLength(1); */
  });

  it('renders props correctly', () => {
/*     const component = shallow(<Comment name="comments" currentPersona="anna" />)
    expect(component.instance().props.name).toBe('comments');
    expect(component.instance().props.currentPersona).toBe('anna'); */
  });


  it('renders comments correctly', () => {

  });

})

