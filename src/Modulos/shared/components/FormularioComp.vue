<template>
    <div>
        <div class="cabecera">
            <h2 class="encabezadoForm">{{ formTitle }}</h2>
        </div>
        <form id="formulario" class="form" @submit.prevent="">
            <div v-for="(campo, index) in this.data.campos" :key="index" class="campo">
                <div v-if="campo.type == 'submit'">
                    <input :type="campo.type" :id="campo.label" :name="campo.name" :value="campo.label"/>
                </div>
                <div v-else-if="campo.type == 'file'">
                    <input :type="campo.type" :id="campo.label" :placeholder="campo.placeholder"/>
                    <label v-if="campo.type ==='file'" :for="campo.label" :name="campo.name"> {{ campo.label }} </label>
                </div>
                <div v-else-if="campo.type == 'select'">
                    <label :for="campo.label" :name="campo.name" class="campo-label"> {{ campo.label }} </label>
                    <select :name="campo.name" :id="campo.name">
                        <option v-for="(option, index) in campo.options" :key="index" :value="option.value" :disabled="option.disabled" :hidden="option.hidden" :selected="option.selected">{{ option.txtOption }}</option>
                    </select>
                </div>
                <div v-else-if="campo.type == 'radio'">
                    <label :for="campo.label" :name="campo.name" class="campo-label"> {{ campo.label }} </label>
                    <div v-for="(option, index) in campo.options" :key="index" class="radio">
                        <input :type="campo.type" :id="option.value" :name="campo.name" :value="option.value">
                        <label :for="option.value">{{ option.txtOption }}</label>
                    </div>
                </div>
                <div v-else-if="campo.type == 'textarea'">
                    <label :for="campo.label" :name="campo.name" class="campo-label"> {{ campo.label }} </label>
                    <textarea :name="campo.name" :id="campo.label" :placeholder="campo.placeholder"></textarea>
                </div>
                <div v-else>
                    <label :for="campo.label" class="campo-label"> {{ campo.label }} </label>
                    <input :type="campo.type" :id="campo.label" :name="campo.name" :placeholder="campo.placeholder" class="form-input"/>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type: Object,
            required: true
        },
    },
    data(){
        return {

        }
    },
    computed:{
        formTitle(){
            return this.data.nombreFormulario
        }
    }
}
</script>

<style scoped>

</style>