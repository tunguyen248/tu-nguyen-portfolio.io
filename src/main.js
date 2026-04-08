import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style.css";
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from "./views/HomePage.vue";
import CertificationsPage from "./views/CertificationsPage.vue";

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes:[
    {
      path: "/tu-nguyen-portfolio.io/",
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