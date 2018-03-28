import Author from './src/components/author';
import React from 'react';
import { mount } from 'enzyme';


test('AuthorComponent renders the author info', () => {
  const user = { login: 'coliff', id: 1212885, avatar_url: 'https://avatars2.githubusercontent.com/u/1212885?v=4' };
  const wrapper = mount(
    <Author user={user} />
  );
  const p = wrapper.find('.user');
  expect(p.text()).toBe('coliff');
});
