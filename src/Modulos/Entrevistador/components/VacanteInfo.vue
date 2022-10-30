<template>
    <section class="principal__cabecera">
        <h2 class="principal__cabecera--titulo"> {{ Puesto }} - {{ Candidato }}</h2>
    </section>
</template>

<script>
    export default {
        props: {
            Puesto: {
                type: String,
                required: true
            },
            Candidato: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .principal__cabecera{
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        margin-bottom: 10px;
    }
    .principal__cabecera--titulo {
        width: 100%;
        font-size: 1.4rem;
    }
</style>