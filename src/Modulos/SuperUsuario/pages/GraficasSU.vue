<template>
    <Header />
    <div class="containerBox">
        <SuperUusuarioNav />
        <section class="principal graficos">
            <!-- <h1>Graficas Super Usuario</h1> -->
            <div class="grafica">
                 <BarChart :styles="myStyles"/>
            </div>
        </section>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    export default {
        components:{
            Header: defineAsyncComponent( () => import('@/Modulos/shared/components/Header.vue') ),
            SuperUusuarioNav: defineAsyncComponent( () => import('@/Modulos/SuperUsuario/components/SuperUusuarioNav.vue') ),
            BarChart: defineAsyncComponent( () => import('@/Modulos/SuperUsuario/components/grafica.vue') )
        },
        computed: {
            myStyles () {
                return {
                    cursor: 'pointer'
                }
            }
        }
    }
</script>

<style scoped>
    .grafica{
        width: 400px;
        height: 400px;
        display: block;
        margin: 0 auto;
    }
    @media screen and (max-width: 500px) {
        .grafica{
            width: 100%;
        }
    }
</style>