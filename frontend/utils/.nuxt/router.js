import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _37f122ea = () => import('..\\pages\\usercenter\\index.vue' /* webpackChunkName: "pages_usercenter_index" */).then(m => m.default || m)
const _6fc5a104 = () => import('..\\pages\\cloudapp\\index.vue' /* webpackChunkName: "pages_cloudapp_index" */).then(m => m.default || m)
const _e1e7c062 = () => import('..\\pages\\permit\\index.vue' /* webpackChunkName: "pages_permit_index" */).then(m => m.default || m)
const _815da446 = () => import('..\\pages\\AIcloud\\index.vue' /* webpackChunkName: "pages_AIcloud_index" */).then(m => m.default || m)
const _67021cc6 = () => import('..\\pages\\Media\\index.vue' /* webpackChunkName: "pages_Media_index" */).then(m => m.default || m)
const _0be3d9c2 = () => import('..\\pages\\aboutUs\\index.vue' /* webpackChunkName: "pages_aboutUs_index" */).then(m => m.default || m)
const _5dfb224b = () => import('..\\pages\\clouddata\\index.vue' /* webpackChunkName: "pages_clouddata_index" */).then(m => m.default || m)
const _34160018 = () => import('..\\pages\\clouddata\\investigate.vue' /* webpackChunkName: "pages_clouddata_investigate" */).then(m => m.default || m)
const _0f37023c = () => import('..\\pages\\usercenter\\changepsw.vue' /* webpackChunkName: "pages_usercenter_changepsw" */).then(m => m.default || m)
const _0329e48e = () => import('..\\pages\\login\\agreement.vue' /* webpackChunkName: "pages_login_agreement" */).then(m => m.default || m)
const _4f9cf375 = () => import('..\\pages\\Media\\industryReports.vue' /* webpackChunkName: "pages_Media_industryReports" */).then(m => m.default || m)
const _59066ebc = () => import('..\\pages\\usercenter\\dwrecord.vue' /* webpackChunkName: "pages_usercenter_dwrecord" */).then(m => m.default || m)
const _08958f6d = () => import('..\\pages\\aboutUs\\join.vue' /* webpackChunkName: "pages_aboutUs_join" */).then(m => m.default || m)
const _673d1c9c = () => import('..\\pages\\clouddata\\shortVideoInsight.vue' /* webpackChunkName: "pages_clouddata_shortVideoInsight" */).then(m => m.default || m)
const _dd853c1e = () => import('..\\pages\\login\\losePassword.vue' /* webpackChunkName: "pages_login_losePassword" */).then(m => m.default || m)
const _6093ca78 = () => import('..\\pages\\login\\register.vue' /* webpackChunkName: "pages_login_register" */).then(m => m.default || m)
const _0d848718 = () => import('..\\pages\\login\\login.vue' /* webpackChunkName: "pages_login_login" */).then(m => m.default || m)
const _bfb343a6 = () => import('..\\pages\\aboutUs\\contact.vue' /* webpackChunkName: "pages_aboutUs_contact" */).then(m => m.default || m)
const _5e90236e = () => import('..\\pages\\clouddata\\reportList.vue' /* webpackChunkName: "pages_clouddata_reportList" */).then(m => m.default || m)
const _7542a0c5 = () => import('..\\pages\\clouddata\\liveInsight.vue' /* webpackChunkName: "pages_clouddata_liveInsight" */).then(m => m.default || m)
const _19a6837c = () => import('..\\pages\\Media\\reportList\\_id.vue' /* webpackChunkName: "pages_Media_reportList__id" */).then(m => m.default || m)
const _4fbd7ae3 = () => import('..\\pages\\clouddata\\reportDetails\\_id.vue' /* webpackChunkName: "pages_clouddata_reportDetails__id" */).then(m => m.default || m)
const _0fcf6d60 = () => import('..\\pages\\Media\\list\\_id.vue' /* webpackChunkName: "pages_Media_list__id" */).then(m => m.default || m)
const _a9daa36c = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/usercenter",
			component: _37f122ea,
			name: "usercenter"
		},
		{
			path: "/cloudapp",
			component: _6fc5a104,
			name: "cloudapp"
		},
		{
			path: "/permit",
			component: _e1e7c062,
			name: "permit"
		},
		{
			path: "/AIcloud",
			component: _815da446,
			name: "AIcloud"
		},
		{
			path: "/Media",
			component: _67021cc6,
			name: "Media"
		},
		{
			path: "/aboutUs",
			component: _0be3d9c2,
			name: "aboutUs"
		},
		{
			path: "/clouddata",
			component: _5dfb224b,
			name: "clouddata"
		},
		{
			path: "/clouddata/investigate",
			component: _34160018,
			name: "clouddata-investigate"
		},
		{
			path: "/usercenter/changepsw",
			component: _0f37023c,
			name: "usercenter-changepsw"
		},
		{
			path: "/login/agreement",
			component: _0329e48e,
			name: "login-agreement"
		},
		{
			path: "/Media/industryReports",
			component: _4f9cf375,
			name: "Media-industryReports"
		},
		{
			path: "/usercenter/dwrecord",
			component: _59066ebc,
			name: "usercenter-dwrecord"
		},
		{
			path: "/aboutUs/join",
			component: _08958f6d,
			name: "aboutUs-join"
		},
		{
			path: "/clouddata/shortVideoInsight",
			component: _673d1c9c,
			name: "clouddata-shortVideoInsight"
		},
		{
			path: "/login/losePassword",
			component: _dd853c1e,
			name: "login-losePassword"
		},
		{
			path: "/login/register",
			component: _6093ca78,
			name: "login-register"
		},
		{
			path: "/login/login",
			component: _0d848718,
			name: "login-login"
		},
		{
			path: "/aboutUs/contact",
			component: _bfb343a6,
			name: "aboutUs-contact"
		},
		{
			path: "/clouddata/reportList",
			component: _5e90236e,
			name: "clouddata-reportList"
		},
		{
			path: "/clouddata/liveInsight",
			component: _7542a0c5,
			name: "clouddata-liveInsight"
		},
		{
			path: "/Media/reportList/:id?",
			component: _19a6837c,
			name: "Media-reportList-id"
		},
		{
			path: "/clouddata/reportDetails/:id?",
			component: _4fbd7ae3,
			name: "clouddata-reportDetails-id"
		},
		{
			path: "/Media/list/:id?",
			component: _0fcf6d60,
			name: "Media-list-id"
		},
		{
			path: "/",
			component: _a9daa36c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
