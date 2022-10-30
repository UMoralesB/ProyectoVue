<template>
    <div class="searchBox">
        <input type="text" class="searchInput" placeholder="Buscar candidato...">
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .searchBox{
        position: relative;
    }
    .searchBox::before{
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        left: 10px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        background-color: rgba(0,0,0,0);
        background-image: url('@/assets/img/search.png');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 100%;
        -webkit-filter: invert();
        filter: invert();
        opacity: .65;
    }
    .searchInput{
        width: 100%;
        min-height: 40px;
        padding: 10px 10px 10px 40px;
        margin: 0;
        border: 1px solid #A6A6A6;
        border-radius: 25px;
        height: 35px;
        width: 100%;
        background-color: #DADADA;
        color: #000000;
    }
</style>