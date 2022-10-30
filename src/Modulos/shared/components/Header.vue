<template>
    <header class="header">
        <h1 class="header__logo">BBVA
            <img src="@/assets/img/BBVA-logo.png" alt="logo">
        </h1>
        <div class="buttons">
            <button class="header__notification">
                <img class="notificacion" src="@/assets/img/notificacion.png" alt="">
            </button>
            <button class="header__menu" id="header__menu" @click="openMenu">
                <span class="burguer"></span>
            </button>
        </div>
    </header>
</template>

<script>
    export default {
        methods:{
            openMenu(){
                var botonMenu = document.getElementById('header__menu');
                var black = document.getElementById('blackBack');
                botonMenu.classList.add('openMenu');
                menu.classList.add('open')
                console.log('menuAbierto');
            }
        }
    }
</script>

<style scoped>

</style>