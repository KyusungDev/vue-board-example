import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/SupportHistory/',
      name: 'SupportHistory',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ '@/views/cms/support/SupportHistory.vue'
        )
    },
    {
      path: '/post',
      name: 'PostListPage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "about" */ '@/views/cms/support/pages/PostListPage.vue'
        )
    },
    {
      path: '/post/create',
      name: 'PostCreatePage',
      component: () =>
        import(
          /* webpackChunkName: "about" */ '@/views/cms/support/pages/PostCreatePage.vue'
        )
      // beforeEnter(to, from, next) {
      //   const { isAuthorized } = store.getters;
      //   if (!isAuthorized) {
      //     alert('로그인이 필요합니다!');
      //     next({ name: 'Signin' });
      //   }
      //   next();
      // }
    },
    {
      path: '/post/:id',
      name: 'PostViewPage',
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "about" */ '@/views/cms/support/pages/PostViewPage.vue'
        )
    },
    {
      path: '/post/:id/edit',
      name: 'PostEditPage',
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "about" */ '@/views/cms/support/pages/PostEditPage.vue'
        )
      // beforeEnter(to, from, next) {
      //   const { isAuthorized } = store.getters;
      //   if (!isAuthorized) {
      //     alert('로그인이 필요합니다!');
      //     next({ name: 'Signin' });
      //   }
      //   store
      //     .dispatch('fetchPost', to.params.postId)
      //     .then(() => {
      //       const post = store.state.post;
      //       const isAuthor = post.user.id === store.state.me.id;
      //       if (isAuthor) {
      //         next();
      //       } else {
      //         alert('게시물의 작성자만 게시물을 수정할 수 있습니다.');
      //         next(false);
      //       }
      //     })
      //     .catch(err => {
      //       console.error(err);
      //       // alert(err.response.data.msg)
      //       next(false);
      //     });
      // }
    }
  ]
});
