import {createRouter, createWebHistory} from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about/:id',
        name: 'about',
        component: About,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('./pages/Cart.vue'),
    },
    {
        path: '/test/:id',
        name: 'test',
        component: () => import('./pages/Test.vue'),
        beforeEnter: (to, from, next) => {
            let isLoggedIn = true;
            if (isLoggedIn) {
                next()
            }else {
                next('/404')
            }
        }
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;