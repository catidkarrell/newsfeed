import { RouteName } from '@/enum/route-name';
import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.Home,
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/newsfeed',
    name: RouteName.Newsfeed,
    component: () => import('../views/Newsfeed.vue'),
  },
  {
    path: '/newsfeed/:id',
    name: RouteName.Details,
    component: () => import('../components/details.vue'),
    props: true,
  },
  {
    path: '/newsfeed/:id/edit',
    name: RouteName.EditPost,
    component: () => import('../components/edit-post.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'PageNotFound',
    component: () => import('../components/page-not-found.vue'),
  },
];

export default routes;
