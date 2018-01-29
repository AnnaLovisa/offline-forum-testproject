import React from 'react';
import { render, mount, shallow } from 'enzyme';
import AvatarSelector from '../components/AvatarSelector';
import * as api from '../api/index';

describe('<AvatarSelector />', () => {

  it('should set img as zac', ()  => {
    const wrapper = shallow(<AvatarSelector currentPersona="Zac" />);
    expect(wrapper.find('img').html()).toContain("zac");
  })

  it('should set img as Esmeralda', ()  => {
    const wrapper = shallow(<AvatarSelector currentPersona="Esmeralda" />);
    expect(wrapper.find('img').html()).toContain("esmeralda");
  })

  it('should set img as Morgana', ()  => {
    const wrapper = shallow(<AvatarSelector currentPersona="Morgana" />);
    expect(wrapper.find('img').html()).toContain("morgana");
  })

})
