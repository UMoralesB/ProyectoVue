<template>
    <div v-for="(item,index) in this.data.items" :key="index">
        <div href="#" class="menu__opc acordion_tit" :id="item.id"  @click.prevent="openToggle(item.id)">{{ item.name }}</div>
        <section class="menu__acordion acordion_admin">
            <router-link v-for="(child, index) in item.children" :key="index" :to="child.to" :class="child.class">{{ child.name }}</router-link >
        </section>
    </div>
    <!-- <router-link v-for="(link, index) in this.data.links" :key="index" :to="link.to" :class="link.class">{{ link.name }}</router-link > -->
    <router-link v-for="(link, index) in this.data.links" :key="index" :to="link.to" :class="link.class">{{ link.name }}</router-link >
</template>

<script>
    export default {
        props: {
            data:{
                type: Object,
                required: true
            }
        },
        methods:{
            openToggle(id){
                console.log(id)
                const elem = document.getElementById(id)
                elem.classList.toggle('open')
                elem.nextElementSibling.classList.toggle('open')

            }
        }
    }
</script>

<style>

</style>