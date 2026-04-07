import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./views/HomePage.vue";
import CertificationsPage from "./views/CertificationsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/certifications",
      name: "certifications",
      component: CertificationsPage,
    },
  ],
});

createApp(App).use(router).mount("#app");