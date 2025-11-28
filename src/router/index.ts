// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TopPage from '@/pages/TopPage.vue';
import CalculatorPage from '@/pages/CalculatorPage.vue';
import DeckPage from '@/pages/DeckPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'top', component: TopPage },
  { path: '/calculator', name: 'calculator', component: CalculatorPage },
  { path: '/deck', name: 'deck', component: DeckPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
