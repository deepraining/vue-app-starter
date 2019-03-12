import { storiesOf } from '@storybook/vue';

import Welcome from '../src/components/Welcome';

storiesOf('Welcome', module)
  .add('Welcome JavaScript', () => ({
    components: { Welcome },
    template: '<welcome name="JavaScript" />',
  }))
  .add('Welcome TypeScript', () => ({
    components: { Welcome },
    // eslint-disable-next-line no-unused-vars
    render(h) {
      return <welcome name={'TypeScript'} />;
    },
  }));
