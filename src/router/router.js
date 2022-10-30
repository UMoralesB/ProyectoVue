import { createRouter, createWebHashHistory } from 'vue-router'
import  autorizationGuard from './auth-guard-su'

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: () => import(/* webpackCunkName:"LoginPage" */ '@/Modulos/shared/pages/loginPage.vue')
  },
  { 
    path: '/Entrevistador',
    name: 'Entrevistador_Home',
    //beforeEnter: [autorizationGuard],
    component: () => import(/* webpackChunkName: "EntrevistadorTabla" */ '@/Modulos/Entrevistador/Layouts/entrevistadorLayout.vue'),
    children: [
      {
        path: 'TablaEntrevistador',
        name: 'Tabla_Procesos_Entrevista',
        component: () => import(/* webpackChunkName: "TablaEntrevistador" */ '@/Modulos/Entrevistador/pages/TablaEntrevistador.vue'),
      },
      {
        path: 'AgregarCandidato',
        name: 'Agendar_Entrevista',
        component: () => import(/* webpackChunkName: "AgregarCandidato" */ '@/Modulos/Entrevistador/pages/AgregarCandidato.vue'),
      },
      {
        path: '',
        redirect: { name: 'Tabla_Procesos_Entrevista'}
      }
    ]
  },
  {
    
    path: '/RecursosHumanos',
    name: 'RecursosHumanos_Home',
    // beforeEnter: [autorizationGuard],
    component: () => import(/* webpackChunkName: "RHTabla" */ '@/Modulos/RecursosHumanos/Layouts/recursosHumanosLayouts.vue'),
    children: [
      {
        path: 'TablaCandidatos',
        name: 'Tabla_Candidatos',
        component: () => import(/* webpackChunkName: "TablaCandidatos" */ '@/Modulos/RecursosHumanos/pages/TablaCandidatos.vue')
      },
      {
        path: 'AgregarCandidato',
        name: 'Agregar_Candidato',
        component: () => import(/* webpackChunkName: "TablaCandidatos" */ '@/Modulos/RecursosHumanos/pages/AgregarCandidato.vue')
      },
      {
        path: '',
        redirect: { name: 'Tabla_Candidatos'}
      }
    ]
  },
  {
    path: '/SuperUsuario',
    name: 'SuperUsuario_Home',
    beforeRouteLeave: [ autorizationGuard ],
    component: () => import(/* webpackChunkName: "SuperUsuarioTabla" */ '@/Modulos/SuperUsuario/Layouts/superUsuarioLayout.vue'),
    children: [
      {
        path: 'VistaGeneralSU',
        name: 'Vista_General',
        component: () => import(/* webpackChunkName: "VistaGeneral" */ '@/Modulos/SuperUsuario/pages/VistaGeneralSU.vue')
      },
      {
        path: 'GraficasSU',
        name: 'Graficas',
        component: () => import(/* webpackChunkName: "Graficas" */ '@/Modulos/SuperUsuario/pages/GraficasSU.vue')
      },
      {
        path: 'AgregarEntrevistadorSU',
        name: 'Agregar_Entrevistador',
        component: () => import(/* webpackChunkName: "AgregarEntrevistador" */ '@/Modulos/SuperUsuario/pages/AgregarEntrevistadorSU.vue')
      },
      {
        path: 'ListaCandidatosSU',
        name: 'Lista_Candidatos',
        component: () => import(/* webpackChunkName: "ListaCandidatos" */ '@/Modulos/SuperUsuario/pages/ListaCandidatosSU.vue')
      },
      {
        path: '',
        redirect: { name: 'Vista_General' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/*webpackChunkName:"NoPageFound"*/ '@/Modulos/shared/pages/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
