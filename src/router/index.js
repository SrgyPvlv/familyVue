import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path:'/', alias:'/family', name:'family', component: ()=>import("../components/FamilyList.vue")},
    {path:'/family/:id', name:'family-details', component: ()=>import("../components/Family.vue")},
    {path:'/add', name:'add', component: ()=>import("../components/AddFamily.vue")},
  ]
})

export default router
