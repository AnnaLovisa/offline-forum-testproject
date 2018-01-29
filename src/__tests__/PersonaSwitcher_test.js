import React from 'react';
import { render, mount, shallow } from 'enzyme';
import App from '../components/App';
import PersonaSwitcher from '../components/PersonaSwitcher';
import * as api from '../api/index';

describe('<PersonaSwitcher />', () => {
  it('should call the internal method changePersona', () => {
    let anObj = { name: 'anna' };
    const wrapper = mount(<App currentPersona= "eric" />)
    wrapper.setState({ currentPersona: anObj.name });
    expect(wrapper.state().currentPersona).toBe('anna');
    wrapper.instance().changePersona({ target: { value: anObj.name }});
   })
})
