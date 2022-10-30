
<template>
    <div class="back">
        <h2 class="ups">Ups.</h2>
        <h2 class="message">Pagina no encontrada <span class="mas">+</span></h2>
        <p class="notFound">404</p>
    </div>
</template>

<style scoped>
    .back{
        width: 100%;
        height: 100vh;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #0f74be
    }
    .ups{
        font-size: 3rem;
        margin: 0 auto;
        color: #FFFFFF;
    }
    .message{
        margin: 2rem auto;
        font-size: 3rem;
        color: #FFFFFF;
        text-align: center;
    }
    .notFound{
        margin: 2rem auto;
        font-size: 6rem;
        line-height: 6rem;
        font-weight: bold;
        margin: 0 auto;
        color: #FFFFFF;
    }
    .mas{
        display: inline-block;
        width: 3rem;
        height: 3rem;
        font-size: 3rem;
        line-height: 3rem;
        background-color: #FFFFFF;
        color: #0f74be;
        text-align: center;
        border-radius: 100%;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
</style>