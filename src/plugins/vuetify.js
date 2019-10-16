import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    themes: {
      light: {
        primary: '#ffb74b',
        secondary: '#ECA13B',
      },
      dark: {
        primary: '#ffb74b',
        secondary: '#f4f4f4',
      },
    },
  },
});
