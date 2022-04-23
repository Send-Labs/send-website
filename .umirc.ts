import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          title: 'Keey',
          component: '@/pages/Home/index',
        },
        {
          path: '/home2',
          title: 'Keey',
          component: '@/pages/Home2/index',
        },
      ],
    },
  ],
  fastRefresh: {},
});
