import { createRouter, createWebHistory } from 'vue-router'

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
          }
        ]  
      }
    ]
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
                path: 'edit',
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  console.log('Navigating to:', to.path); // Логирование маршрута
  console.log('Token present:', !!token); // Логирование наличия токена

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      console.log('No token, redirecting to /admin/login');
      next('/admin/login'); // Если нет токена и пытаемся перейти на защищенную страницу, перенаправляем на страницу входа
    } else {
      console.log('Token found, proceeding to', to.path);
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (token) {
      console.log('Token found, redirecting to /admin');
      next('/admin'); // Перенаправляем авторизованных пользователей с логин-страницы на админку
    } else {
      console.log('No token, proceeding to', to.path);
      next();
    }
  } else {
    console.log('No auth required, proceeding to', to.path);
    next(); // Продолжаем навигацию для маршрутов, которым не требуется аутентификация
  }
});

export default router
