// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)

// initialize Firebase with out project
firebase.initializeApp({
  projectId: 'practice-c5a00',
  databaseURL: 'https://practice-c5a00.firebaseio.com'
})

// export database as a variable named db
export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // attach to elements with id = "app"
  router,
  components: { App },
  template: '<App/>'
})
