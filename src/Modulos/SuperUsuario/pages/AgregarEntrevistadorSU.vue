<template>
    <Header />
    <div class="containerBox">
        <SuperUusuarioNav />
        <section class="principal addInterviewer">
            <FormularioComp :data="formInfo" />
        </section>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    export default {
        components:{
            Header: defineAsyncComponent( () => import('@/Modulos/shared/components/Header.vue') ),
            SuperUusuarioNav: defineAsyncComponent( () => import('@/Modulos/SuperUsuario/components/SuperUusuarioNav.vue') ),
            FormularioComp: defineAsyncComponent( () => import('@/Modulos/shared/components/FormularioComp.vue'))
        },
        data(){
            return {
                formInfo:{
                    nombreFormulario: 'Registro Entrevistador',
                    campos: [
                        { 
                            type: 'text',
                            label: 'Nombre',
                            name: 'Nombre',
                            placeholder: 'Nombre Candidato'
                        },
                        {
                            type: 'date',
                            label: 'Fecha Entrevista',
                            name: 'Fecha Entrevista',
                            placeholder: ''
                        },
                        {
                            type: 'mail',
                            label: 'Correo electónico',
                            name: 'Correo',
                            placeholder: 'Correo electónico'
                        },
                        {
                            type: 'text',
                            label: 'Especialidad',
                            name: 'Especialidad',
                            placeholder: 'Especialidad'
                        },
                        {
                            type: 'number',
                            label: 'Encargado',
                            name: 'Encargado',
                            placeholder: 'Id encargado RH'
                        },
                        {
                            type: 'submit',
                            label: 'Guardar'
                        },
                    ]
                }
            }
        }
    }
</script>

<style>

</style>