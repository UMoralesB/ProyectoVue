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
                <!-- <SuperUsuarioTogNav :items="items" /> -->
                <SuperUsuarioLinks :data="info" /><!--v-for="link in links" :key="link.to" :link="link"-->
            </nav>
        </section>
    </aside>
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    export default {
        data(){
            return {
                usuario: 'Rick Sanchez',
                perfil: 'Administrador',
                info:{                
                    usuario: 'ulises',
                    perfil: 'Visitante',
                    items:[
                        {
                            id:'acordion1',
                            name: 'Admin',
                            children: [
                                { to: {name:'Vista_General', params:{}}, name: 'Dashboard', class:'acordion__opc dashboard' },
                                { to: {name:'Graficas', params:{}}, name: 'Gráfico', class:'acordion__opc grafico' }
                            ],
                        },
                        {
                            id:'acordion2',
                            name: 'RH',
                            children: [
                                { to: {name:'Lista_Candidatos', params:{}}, name: 'Lista de candidatos', class:"acordion__opc dashboard" }
                            ],
                        },
                    ],
                    links:[
                       // { to: 'LoginPage', name: 'Cerrar Sesión', class: 'menu__opc op1' }
                        { to: {name:'LoginPage', params: {}}, name: 'Cerrar Sesión', class: 'menu__opc op1' }
                    ]
                }
            }
        },
        components: {
            //SuperUsuarioTogNav: defineAsyncComponent( () => import('./SuperUsuarioTogNav.vue') ),
            SuperUsuarioLinks: defineAsyncComponent ( () => import('./SuperUsuarioLinks.vue') )
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
