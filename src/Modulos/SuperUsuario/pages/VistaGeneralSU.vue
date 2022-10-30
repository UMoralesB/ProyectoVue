<template>
    <Header />
    <div class="containerBox">
        <SuperUusuarioNav />
        <section class="principal superUsuarioTab">
            <h2 class="encabezadoTabla">Vista general</h2>
            <div class="cabeceraSection">
                <button class="agregar" @click="$router.push( {name:'Agregar_Entrevistador'} )"> 
                    <div class="userIcon"></div>
                    <span>Agregar</span>
                </button>
                <!--<h2>Candidatos</h2>-->
                <BuscadorComponent />
            </div>
            <TableListComp :data="tableProps" />
        </section>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    export default {
        components: {
            SuperUusuarioNav: defineAsyncComponent( () => import('@/Modulos/SuperUsuario/components/SuperUusuarioNav.vue') ),
            Header: defineAsyncComponent( () => import('@/Modulos/shared/components/Header.vue') ),
            BuscadorComponent: defineAsyncComponent( () => import('@/Modulos/shared/components/BuscadorComponent.vue') ),
            TableListComp: defineAsyncComponent( () => import('@/Modulos/shared/components/TableListComp.vue') )
        },
        data(){
            return {
                usuario: 'Ringo',
                perfil: 'Visitante',
                tableProps: {
                    theads: ['RH','Fecha','Nombre','Especialidad','Experiencia','Estatus','CV','Opciones'],
                    postulants: [
                        {   
                            rh: 'Juanito Perez',
                            date: '12/12/2022',
                            nombre: 'Desarrolador Front',
                            especialidad: 'En entrevista',
                            experiencia:'2 años',
                            estatus:'En entrevista',
                            cv: {
                                type: 'link',
                                ref: 'http://google.com.mx',
                                class: 'file'
                            },
                            button: {
                                type: 'select',
                                btnTxt: 'Seleccione',
                                options: [
                                    { value:'', txtOption: 'Seleccione', disabled: true, selected: true, hidden: true },
                                    { value: 'Eliminar', txtOption: 'Eliminar' },
                                    { value: 'Editar', txtOption: 'Editar' }
                                ],
                                idPostulant: 1 
                            }
                        },
                        {   
                            rh: 'Juanito Perez',
                            date: '12/12/2022',
                            nombre: 'Desarrolador Front',
                            especialidad: 'En entrevista',
                            experiencia:'2 años',
                            estatus:'En entrevista',
                            cv: {
                                type: 'link',
                                ref: 'http://google.com.mx',
                                class: 'file'
                            },
                            button: {
                                type: 'select',
                                btnTxt: 'Seleccione',
                                options: [
                                    { value:'', txtOption: 'Seleccione', disabled: true, selected: true, hidden: true },
                                    { value: 'Eliminar', txtOption: 'Eliminar' },
                                    { value: 'Editar', txtOption: 'Editar' }
                                ],
                                idPostulant: 1 
                            }
                        },
                    ]
                }
            }
        },
    }
</script>

<style>

</style>