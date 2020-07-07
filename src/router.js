/*
 * @Date: 2020-05-31 21:56:54
 * @LastEditors: hanjiawang
 * @LastEditTime: 2020-07-07 22:56:05
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import NotFound from './views/404.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user',
      hideInMenu: true,
      component: () =>
        import(/* webpackChunkName: "layout" */ './layouts/UserLayout.vue'),
      children: [
        {
          path: '/user',
          redirect: '/user/login'
        },
        {
          path: '/user/login',
          name: 'login',
          component: () =>
            import(/* webpackChunkName: "user" */ './views/User/Login.vue')
        },
        {
          path: '/user/Register',
          name: 'register',
          component: () =>
            import(/* webpackChunkName: "user" */ './views/User/Register.vue')
        }
      ]
    },
    {
      path: '/',
      component: () =>
        import(/* webpackChunkName: "layout" */ './layouts/BasicLayout.vue'),
      children: [
        // dashboard
        {
          path: '/',
          redirect: '/dashboard/analysis'
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: { icon: 'dashboard', title: '仪表盘' },
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/dashboard/analysis',
              name: 'analysis',
              meta: { title: '分析页' },
              component: () =>
                import(
                  /* webpackChunkName: "dashboard" */ './views/Dashboard/Analysis'
                )
            }
          ]
        },
        // form
        {
          path: '/form',
          name: 'form',
          meta: { icon: 'form', title: '表单' },
          component: { render: h => h('router-view') },
          children: [
            {
              path: '/form/basic-form',
              name: 'basicForm',
              meta: { title: '基础表单' },
              component: () =>
                import(/* webpackChunkName: "form" */ './views/Forms/BasicForm')
            },
            {
              path: '/form/step-form',
              name: 'stepForm',
              meta: { title: '分步表单' },
              component: () =>
                import(/* webpackChunkName: "form" */ './views/Forms/StepForm'),
              children: [
                {
                  path: '/form/step-form',
                  redirect: '/form/step-form/info'
                },
                {
                  path: '/form/step-form/info',
                  name: 'info',
                  meta: { title: '分步表单1' },
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ './views/Forms/StepForm/Step1'
                    )
                },
                {
                  path: '/form/step-form/confirm',
                  name: 'confirm',
                  meta: { title: '分步表单2' },
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ './views/Forms/StepForm/Step2'
                    )
                },
                {
                  path: '/form/step-form/result',
                  name: 'result',
                  meta: { title: '分步表单3' },
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ './views/Forms/StepForm/Step3'
                    )
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: '404',
      hideInMenu: true,
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.fullPath.replace('?')[0] != from.fullPath.replace('?')[0]) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
