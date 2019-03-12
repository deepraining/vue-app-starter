import './init';
import { mount } from '@vue/test-utils';
import Hello from '../src/components/Hello';

test('Hello component', () => {
  const hello = mount(Hello, {
    propsData: {
      name: 'test',
    },
  });

  expect(hello.classes('container')).toBe(true);
  expect(hello.text()).toBe('Hello, test!');
});
