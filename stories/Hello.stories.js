import { storiesOf } from '@storybook/vue';

import Hello from '../src/components/Hello';

storiesOf('Hello', module)
  .add('Hello JavaScript', () => ({
    components: { Hello },
    template: '<hello name="JavaScript" />',
  }))
  .add('Hello TypeScript', () => ({
    components: { Hello },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <hello name={'TypeScript'} />;
    },
  }));
