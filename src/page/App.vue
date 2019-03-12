<script>
import Hello from '../components/Hello';

export default {
  name: 'App',
  components: { Hello },
  // eslint-disable-next-line no-unused-vars
  render(h) {
    return (
      <div>
        <el-button>Element UI</el-button>
        <hello name={'page'} />
      </div>
    );
  },
};
</script>
