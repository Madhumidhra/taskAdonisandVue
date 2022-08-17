import { createRouter, createWebHistory } from 'vue-router'
import assessFormEmp from '../components/assessFormEmp.vue'
import assessTableEmp from '../components/assessTableEmp.vue'
import assessFormDept from '../components/assessFormDept.vue'
import assessTableDept from '../components/assessTableDept.vue'
import searchDisplay from '../components/searchDisplay.vue'


export default createRouter({
  history: createWebHistory(),

  routes: [

    {
      path: '/assessFormEmp',
      name :'formDisplayEmp',
      component: assessFormEmp,
    },
    {
      path: '/assessTableEmp',
      name:'tableDisplayEmp',
      component:assessTableEmp,
    },
    {
      path: '/assessFormDept',
      name :'formDisplayDept',
      component: assessFormDept,
    },
    {
      path: '/assessTableDept',
      name:'tableDisplayDept',
      component:assessTableDept,
    },
      {
        path: '/searchDisplay',
        name:'filterdisplaydept',
        component:searchDisplay,
      },
    
  ],



})