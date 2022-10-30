<template>
    <Header />
    <div class="containerBox">
        <SuperUusuarioNav />
        <section class="principal entrevistaTab">
            <div class="cabeceraSection">
                <h2>Candidatos</h2>
                <BuscadorComponent />
            </div>
            <TableListComp :data="tableProps" />
        </section>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    export default {
        components:{
            Header: defineAsyncComponent( () => import('@/Modulos/shared/components/Header.vue') ),
            SuperUusuarioNav: defineAsyncComponent( () => import('@/Modulos/SuperUsuario/components/SuperUusuarioNav.vue') ),
            BuscadorComponent: defineAsyncComponent( () => import('@/Modulos/shared/components/BuscadorComponent.vue') ),
            TableListComp: defineAsyncComponent( () => import('@/Modulos/shared/components/TableListComp.vue') )
        },
        data(){
            return {
                tableProps: {
                    theads: ['Nombre','Posicion','Estatus','Fecha entrevista',],
                    postulants: [
                        {   
                            name: 'Ulises Morales',
                            jobPosition: 'Desarrolador Front',
                            status: 'En entrevista',
                            dateInterview:'12/12/2022',
                            button: {
                                type: 'button',
                              btnTxt: 'Editar',
                              idPostulant: 1,
                            }
                        },
                        {   
                            name: 'Jorge Morales',
                            jobPosition: 'Desarrolador Back',
                            status: 'Por Revisar',
                            dateInterview:'12/12/2022',
                            button: {
                                type: 'button',
                                btnTxt: 'Ver Perfil',
                                idPostulant: 2,
                            }
                        }
                    ]
                }
            }
        }
    }
</script>

<style>

</style>