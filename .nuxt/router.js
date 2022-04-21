import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _70924194 = () => interopDefault(import('..\\pages\\createTweet.vue' /* webpackChunkName: "pages/createTweet" */))
const _25a761c8 = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _39b012d8 = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _039cd88a = () => interopDefault(import('..\\pages\\UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _0fafb60c = () => interopDefault(import('..\\pages\\tweet\\_id.vue' /* webpackChunkName: "pages/tweet/_id" */))
const _439afa51 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/createTweet",
    component: _70924194,
    name: "createTweet"
  }, {
    path: "/Profile",
    component: _25a761c8,
    name: "Profile"
  }, {
    path: "/Register",
    component: _39b012d8,
    name: "Register"
  }, {
    path: "/UserHome",
    component: _039cd88a,
    name: "UserHome"
  }, {
    path: "/tweet/:id?",
    component: _0fafb60c,
    name: "tweet-id"
  }, {
    path: "/",
    component: _439afa51,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
