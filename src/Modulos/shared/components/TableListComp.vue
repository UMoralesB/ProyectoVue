<template>
    <div class="section_table">
        <table id="tabla">
            <thead>
                <tr>
                    <th v-for="(thead,index) in this.data.theads" :key="index">{{ thead }}</th>
                </tr>
            </thead>
            <tbody id="lista">
                <tr v-for="(postulat,index) in this.data.postulants" :key="index">
                    <td v-for="(value,index) in postulat" :key="index">
                        <button v-if="value.type ==='button'" :id="value.idPostulant" @click="viewInfoDetail(value.idPostulant)">
                            <div :class="setClass(value.btnTxt)"></div>
                            <span>{{ value.btnTxt }}</span>
                        </button>
                        <a v-else-if="value.type ==='link'" :class="value.class" :href="value.ref" target="_blank">{{value.ref }}</a>
                        <select v-else-if="value.type ==='select'" :name="value.btnTxt" :id="'opciones' + value.idPostulant">
                            <option v-for="(option, index) in value.options" :key="index" :value="option.value" :disabled="option.disabled" :hidden="option.hidden" :selected="option.selected">{{ option.txtOption }}</option>
                        </select>
                        <span v-else>{{ value }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        props:{
            data: {
                type: Object,
                required: true
            }
        },
        methods: {
            viewInfoDetail(id){
                console.log('entre al metodo con el id ' + id )
            },
            setClass(value){
                const className = value.replace(' ', '').toLowerCase() + ' btnIcon'
                return className 
            }
        }
    }
</script>

<style scoped>

</style>