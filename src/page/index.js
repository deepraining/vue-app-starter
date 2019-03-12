import 'normalize.css/normalize.css';
import Vue from 'vue';
import { Button } from 'element-ui';
import App from './App';

Vue.use(Button);

// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  render: h => h(App),
});
