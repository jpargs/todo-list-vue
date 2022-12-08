import { createRouter, createWebHistory } from "vue-router";

import TaskIndex from "../tasks/Index.vue";
import TaskNew from "../tasks/Create.vue";
import TaskEdit from "../tasks/Edit.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "tasks-home",
      component: TaskIndex,
    },
    {
      path: "/tasks",
      name: "tasks",
      component: TaskIndex,
    },
    {
      path: "/tasks/new",
      name: "tasks-new",
      component: TaskNew,
    },
    {
      path: "/tasks/:id/edit",
      name: "tasks-edit",
      component: TaskEdit,
    },
  ],
});

export default router;
