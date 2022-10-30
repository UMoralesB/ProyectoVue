<template>
    <router-link :to="link.to" :class="link.class">{{ link.name }}</router-link>
</template>

<script>
    export default {
        props: {
            link:{
                type: Object,
                required: true
            }
        }
    }
</script>

<style>

</style>