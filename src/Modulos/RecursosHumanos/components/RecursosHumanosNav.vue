<template>
    <aside class="menu" id="menu">
        <div class="blackBack" id="blackBack" @click="closeMenu"></div>
        <section class="menuContent">
            <div class="perfil">
                <div class="perfilImg">
                    <img src="" alt="">
                </div>
                <div id="nombre">
                    <h2>¡Bienvenido {{ usuario }}!</h2>
                </div>
                <h6 class="area">{{ perfil }}</h6>
            </div>
            <nav>
                <RecursosHumanosLinks v-for="link in links" :key="link.to" :link="link" />
            </nav>
        </section>
    </aside>
</template>

<script>
    import { defineAsyncComponent } from 'vue'
import FormularioCompVue from '@/Modulos/shared/components/FormularioComp.vue';
    export default {
        data(){
            return {
                usuario: 'Morty Smith',
                perfil: 'Recursos Humanos',
                links: [
                    { to: {name: 'Tabla_Candidatos', params:{}}, name: 'Lista de candidatos', class: 'menu__opc op1' },
                    { to: {name:'Agregar_Candidato', params:{}}, name: 'Agregar candidato', class: 'menu__opc op1' },
                    { to: {name: 'LoginPage', params:{}}, name: 'Cerrar Sesión', class: 'menu__opc op1' }
                ]
            }
        },
        components: {
            RecursosHumanosLinks: defineAsyncComponent ( () => import('./RecursosHumanosLinks.vue') )
        },
        methods:{
            closeMenu(){
                var botonMenu = document.getElementById('header__menu');
                var menu = document.getElementById('menu');
                botonMenu.classList.remove('openMenu');
                menu.classList.remove('open')
            }
        }
    }
</script>

<style scoped>

</style>
