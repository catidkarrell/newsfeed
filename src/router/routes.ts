import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/newsfeed',
    name: 'Newsfeed',
    component: () => import('../views/Newsfeed.vue'),
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: () => import('../components/details.vue'),
    props: true,
  },
];

export default routes;
