import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from '../components/App';

//Shallow renders a component and shows the object-structure with the props and state
//Mount is used for interactive with the DOM


describe('<App />', () => {

  it('renders 1 <App /> component', () => {
    const component = shallow(<App name="app" />)
    expect(component).toHaveLength(1);
  });

  it('renders props correctly', () => {
    const component = shallow(<App name="app" />)
    expect(component.instance().props.name).toBe('app');
  });

  it('renders <App /> with state', () => {
    const component = shallow(<App currentPersona='anna' />)
    expect(component.instance().props.currentPersona).toBe('anna');
  });

  it('should call the method changePersona', () => {
    let anObj = { name: "anna" };
    const wrapper = mount(<App currentPersona= "eric" />)
    wrapper.instance().changePersona({ target: { value: anObj.name }});
    expect(wrapper.state().currentPersona).toBe("anna");
   })

  it('changePage should toggle to bot', () => {
    const wrapper = mount(<App currentPage="bot" />)
    wrapper.setState({ currentPage: "home" });
    wrapper.instance().changePage();
    expect(wrapper.state().currentPage).toBe("bot");
    wrapper.instance().changePage();
    expect(wrapper.state().currentPage).toBe("home");
   })
})







