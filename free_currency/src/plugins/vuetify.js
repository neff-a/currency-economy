import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#3e8ef7',
        secondary: '#e4eaec',
        accent: '#000',
        error: '#ff4c52',
        info: '#0bb2d4',
        success: '#11c26d',
        warning: '#eb6709'
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
