import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";

/* Guest Component */
const Login = () => import("@/page/auth/Login.vue");
const Register = () => import("@/page/auth/Register.vue");
/* Guest Component */

/* Layouts */
const DahboardLayout = () => import("@/layout/Default.vue");
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import("@/page/Dashboard.vue");
const Home = () => import("@/page/Home.vue");
/* Authenticated Component */

const routes = [
  {
    name: "login",
    path: "/login",
    component: Login,
    meta: {
      middleware: "guest",
      title: `Login`,
    },
  },
  {
    name: "register",
    path: "/register",
    component: Register,
    meta: {
      middleware: "guest",
      title: `Register`,
    },
  },
  {
    path: "/",
    component: DahboardLayout,
    meta: {
      middleware: "auth",
    },
    children: [
      {
        name: "dashboard",
        path: "/",
        component: Dashboard,
        meta: {
          title: `Dashboard`,
        },
      },
      {
        name: "home",
        path: "/home",
        component: Home,
        meta: {
          title: `Home`,
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.middleware == "guest") {
    if (store.state.auth.authenticated) {
      next({ name: "dashboard" });
    }
    next();
  } else {
    if (store.state.auth.authenticated) {
      next();
    } else {
      next({ name: "login" });
    }
  }
});

export default router;
