import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import TodoView from '../views/TodoView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect:  localStorage.getItem('authorized') ? '/todo' : '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem('authorized')
  
  if (isAuth) {
    if(to.name == 'login'){
      next({name: 'todo'});
    }else{
      next();
    }
  } else {
    if(to.name == 'todo'){
      next({name: 'login'});
    }else{
      next();
    }
  }
})

export default router
