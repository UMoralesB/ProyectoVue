<template>
    <!--<h1>Form Entrevistador</h1>-->
    <Header/>
    <div class="containerBox">
        <EntrevistadorNav />
        <section class="principal entrevistaForm">
            <VacanteInfo :Puesto="NombreVacante" :Candidato="NombreCandidato" />
            <FormularioComp :data="formInfo"/>
        </section>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    export default {
        components: {
            VacanteInfo: defineAsyncComponent( () => import('@/Modulos/Entrevistador/components/VacanteInfo.vue') ),
            EntrevistadorNav: defineAsyncComponent( () => import('@/Modulos/Entrevistador/components/EntrevistadorNav.vue') ),
            Header: defineAsyncComponent( () => import('@/Modulos/shared/components/Header.vue') ), 
            FormularioComp: defineAsyncComponent( () => import('@/Modulos/shared/components/FormularioComp.vue'))
        },
        data(){
            return{
                NombreVacante: 'Diseñador Grafico', //Debe ser null por defecto
                NombreCandidato: 'Ulises Morales', //Debe ser null por defecto
                Vacante: Object,
                formInfo:{
                    nombreFormulario: '',
                    campos: [
                        { 
                            type: 'text',
                            label: 'Experiencia',
                            name: 'Experiencia',
                            placeholder: 'Experiencia laboral'
                        },
                        {
                            type: 'text',
                            label: 'Tecnologías',
                            name: 'Tecnologias',
                            placeholder: ' Tecnologias y herramientas'
                        },
                        {
                            type: 'select',
                            label: 'Nivel de candidato',
                            name: 'Nivel de candidato',
                            placeholder: 'Selecciona un nivel',
                            options: [
                                { value:'', txtOption: 'Selecciona un nivel', disabled: true, selected: true, hidden: true },
                                { value: 'Programador jr', txtOption: 'Programador jr' },
                                { value: 'Programador semi senior', txtOption: 'Programador semi senior' },
                                { value: 'Programador senior', txtOption: 'Programador senior' }
                            ]
                        },
                        {
                            type: 'radio',
                            label: '¿Cumple con la vacante?',
                            name: '¿Cumple con la vacante?',
                            options: [
                                { value: 'Si', txtOption: 'Si' },
                                { value: 'No', txtOption: 'No' },
                            ]
                        },
                        {
                            type: 'textarea',
                            label: 'Observaciones',
                            name: 'Observaciones',
                            placeholder: 'Observaciones y comentarios'
                        },
                        {
                            type: 'submit',
                            label: 'Subir resultados'
                        },
                    ]
                }
            }
        },
        methods(){
            // async getPositionInfo(){
            //     const vacante = await positionInfo()
            // }
        },
        mounted(){
            //this.getPositionInfo()
        }
    }
</script>

<style>

</style>