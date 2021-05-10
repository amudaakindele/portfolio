import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About Us',
    component: () => import('../views/About.vue')
  }, 
  {
    path: '/blog',
    name: 'Blogs',
    component: () => import('../views/Blogs.vue')
  },
  {
    path: '/contact',
    name: 'Contact Us',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/products',
    name: 'Our Products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/services',
    name: 'Our Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/SingleProduct.vue')
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: () => import('../views/SingleBlog.vue')
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'Not Found',
    component: () => import('../views/errors/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
