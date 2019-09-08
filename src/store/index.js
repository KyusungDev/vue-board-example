import Vue from 'vue';
import Vuex from 'vuex';
import cmsSupports from '@/store/modules/cms/support';

Vue.use(Vuex);

const storeModules = {
  cmsSupports
};

export default new Vuex.Store({
  modules: storeModules,
  strict: process.env.NODE_ENV !== 'production'
});
