import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloFromVux from '../components/HelloFromVux.vue'
import Actionsheet from '../components/Actionsheet.vue'
import TestVux from '../components/TestVux.vue'
import Alert from '../components/Alert.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/TestVux',
      name: 'TestVux',
      component: TestVux,
      children: [
        {
          path: 'Alert',
          name: 'Alert',
          component: Alert
        }
      ]
    },
    {
      path: '/HelloFromVux',
      name: 'HelloFromVux',
      component: HelloFromVux
    },
    {
      path: '/Actionsheet',
      name: 'Actionsheet',
      component: Actionsheet
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    }
  ]
})
