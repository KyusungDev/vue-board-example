import api from '@/api/cms/support';
import * as MUTATION from './mutation';

const state = {
  posts: [],
  post: null
};

const getters = {};

const actions = {
  fetchPostList({ commit }) {
    console.log('fetchPostList');
    return api.getPostList('/posts').then(res => {
      commit(MUTATION.FETCH_POST_LIST, res.data);
    });
  },
  fetchPost({ commit }, postId) {
    return api.getPost(`/posts/${postId}`).then(res => {
      commit(MUTATION.FETCH_POST, res.data);
    });
  }
};

const mutations = {
  [MUTATION.FETCH_POST_LIST](state, posts) {
    state.posts = posts;
  },
  [MUTATION.FETCH_POST](state, post) {
    state.post = post;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
