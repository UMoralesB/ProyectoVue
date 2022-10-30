<template>
    <Header />
    <div class="containerBox">
        <RecursosHumanosNav />
        <section class="principal agregarCandidato">
            <FormularioComp :data="formInfo" />
        </section>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    export default {
        components: {
            RecursosHumanosNav: defineAsyncComponent( () => import('@/Modulos/RecursosHumanos/components/RecursosHumanosNav.vue') ),
            Header: defineAsyncComponent( () => import('@/Modulos/shared/components/Header.vue') ),
            FormularioComp: defineAsyncComponent( () => import('@/Modulos/shared/components/FormularioComp.vue') )
        },
        data(){
            return {
                formInfo:{
                    nombreFormulario: 'Candidatos',
                    campos: [
                        { 
                            type: 'text',
                            label: 'Nombre',
                            name: 'Nombre',
                            placeholder: 'Nombre Candidato'
                        },
                        {
                            type: 'text',
                            label: 'Posición',
                            name: 'Posición',
                            placeholder: 'A que posición postula'
                        },
                        {
                            type: 'number',
                            label: 'Entrevistador',
                            name: 'Entrevistador',
                            placeholder: 'Id del entrevistador'
                        },
                        {
                            type: 'date',
                            label: 'Fecha Entrevista',
                            name: 'Fecha Entrevista',
                            placeholder: ''
                        },
                        {
                            type: 'file',
                            label: 'CV',
                            name: 'CV',
                            placeholder: ''
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