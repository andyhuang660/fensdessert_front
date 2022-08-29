import { createRouter, createWebHashHistory } from 'vue-router'
import FrontLayout from '../views/front/FrontLayout.vue'
// import AdminLayout from '../views/admin/AdminLayout.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name:'homeview',
      component:()=> import('../views/HomeView.vue')
    },
    {
      path: '/',
      component: FrontLayout,
      children:[
        {
          path: 'about',
          name: 'about',
          component: () => import('@/views/front/AboutView.vue'),
          meta: {
            title: 'Fens Dessert | 關於我們',
            login: false,
            admin: false
          }
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('@/views/front/ProductsView.vue'),
          meta: {
            title: 'Fens Dessert | 產品介紹',
            login: false,
            admin: false
          }
        },
        {
          path: 'shopping',
          name: 'shopping',
          component: () => import('@/views/front/ShoppingView.vue'),
          meta: {
            title: 'Fens Dessert | 訂購流程',
            login: false,
            admin: false
          }
        },
        {
          path: 'carts',
          name: 'carts',
          component: () => import('@/views/front/CartsView.vue'),
          meta: {
            title: 'Fens Dessert | 購物車',
            login: true,
            admin: false
          }
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/views/front/OrderView.vue'),
          meta: {
            title: 'Fens Dessert | 訂單',
            login: true,
            admin: false
          }
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/views/front/ContactView.vue'),
          meta: {
            title: 'Fens Dessert | 聯繫我們',
            login: false,
            admin: false
          }
        },
        {
          path: 'questions',
          name: 'questions',
          component: () => import('@/views/front/QuestionsView.vue'),
          meta: {
            title: 'Fens Dessert | 常見問題',
            login: false,
            admin: false
          }
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/views/front/RegisterView.vue'),
          meta: {
            title: '會員註冊',
            login: false,
            admin: false
          }
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/front/LoginView.vue'),
          meta: {
            title: '會員登入',
            login: false,
            admin: false
          }
        }
      ]
    },{
      path: '/admin',
      component: () => import('@/views/admin/AdminLayout.vue'),
      children:[
        {
          path: '',
          name: 'admin-home',
          component: () => import('@/views/admin/HomeView.vue'),
          meta:{
            title:'後台管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'newsAdmin',
          name: 'admin-news',
          component: () => import('@/views/admin/NewsView.vue'),
          meta:{
            title:'最新消息管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'productsAdmin',
          name: 'admin-products',
          component: () => import('@/views/admin/ProductsView.vue'),
          meta:{
            title:'商品管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'ordersAdmin',
          name: 'admin-orders',
          component: () => import('@/views/admin/OrdersView.vue'),
          meta:{
            title:'訂單管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'membersAdmin',
          name: 'admin-members',
          component: () => import('@/views/admin/MembersView.vue'),
          meta:{
            title:'訂單管理',
            login:true,
            admin:true
          }
        },
        {
          path: 'contactAdmin',
          name: 'admin-contact',
          component: () => import('@/views/admin/ContactView.vue'),
          meta:{
            title:'聯絡我們',
            login:true,
            admin:true
          }
        }
      ]
    }
    
  ]
})

// router.afterEach((to, from) => {
//   document.title = to.meta.title
// })

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if (user.isLogin && (to.path === '/register' || to.path === '/login')) {
    next('/')
  } else if (to.meta.login && !user.isLogin) {
    alert("請先登入會員")
    next('/login')
  } else if (to.meta.admin && !user.isAdmin) {
    next('/')
  } else {
    next()
  }
})


export default router
