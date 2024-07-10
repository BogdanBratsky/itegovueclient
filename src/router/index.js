import { createRouter, createWebHistory } from 'vue-router';
import axios from 'axios';
import { serverAddres } from '../../config.js';

const routes = [
  // маршруты для пользовательской части сайта
  {
    path: '/',
    component: () => import('../views/public/PublicLayout.vue'),
    children: [
      {
        path: '/',
        alias: '/main',
        component: () => import('../views/public/MainView.vue'),
      },
      {
        path: '/blog',
        component: () => import('../views/public/PostsView.vue'),
        children: [
          {
            path: '',
            component: () => import('../views/public/PostListView.vue'),
          },
          {
            path: ':id',
            component: () => import('../components/ItegoPostDetails.vue'),
          },
        ]
      },
      {
        path: 'blog/categories',
        component: () => import('../views/public/PostsView.vue'),
        children: [
          {
            path: ':id',
            component: () => import('../views/public/CategoriesView.vue'),
          },
        ]
      },
      {
        path: '/thanks',
        component: () => import('../views/public/ThanksView.vue'),
      },
    ]
  },
  {
    path: '/privacy-policy',
    component: () => import('../views/public/PrivacyPolicyView.vue'),
  },
  // маршруты для администраторской части сайта
  {
    path: '/admin',
    component: () => import('../views/admin/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: () => import('../views/admin/AdminPanelView.vue'),
        children: [
          {
            path: 'articles',
            component: () => import('../views/admin/AdminPostView.vue'),
            children: [
              {
                path: '',
                component: () => import('../views/admin/PostListView.vue'),
              },
              {
                path: 'create',
                component: () => import('../components/admin/AdminCreateArticle.vue')
              },
              {
                path: 'edit/:id',
                component: () => import('../components/admin/AdminEditArticle.vue')
              }
            ]
          },
          {
            path: 'categories',
            component: () => import('../views/admin/CategoryListView.vue')
          },
          {
            path: 'users',
            component: () => import('../views/admin/UserListView.vue')
          }
        ]
      },
      {
        path: 'login',
        component: () => import('../views/admin/LoginView.vue'),
        meta: { requiresGuest: true }
      }
    ]
  },
  {
    path: '/:notFound(.*)',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const success = localStorage.getItem('success') === 'true';
  if (!success && to.path.startsWith('/admin') && to.path !== '/admin/login') {
      next('/admin/login');
  } else {
      next();
  }
});

export default router;
