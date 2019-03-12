<script>
import Hello from './components/Hello';

export default {
  name: 'App',
  components: { Hello },
  // eslint-disable-next-line no-unused-vars
  render(h) {
    return <hello name={'TypeScript'} />;
  },
};
</script>
