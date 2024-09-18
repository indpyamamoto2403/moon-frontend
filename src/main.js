import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'

// ルートの定義
const routes = [
  { path: '/', component: HomePage, meta: { title: '生成AIレスポンダー' } },
  { path: '/about', component: AboutPage, meta: { title: '生成AIレスポンダー' }},
]
// ルーターインスタンスの作成
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
createApp(App)
.use(router)
.mount('#app')
