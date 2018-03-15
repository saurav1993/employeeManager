import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EditEmployee from '@/components/EditEmployee'
import NewEmployee from '@/components/NewEmployee'
import ViewEmployee from '@/components/ViewEmployee'

Vue.use(Router)

export default new Router({
  mode : "history",
  routes: [
    
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
