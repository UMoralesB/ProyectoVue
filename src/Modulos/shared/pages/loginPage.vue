<template>
    <div class="containerBox">
        <header class="header">
            <h1 class="header__logo">BBVA
                <img src="@/assets/img/BBVA-logo.png" alt="logo">
            </h1>
        </header>
        <h2 class="titulo">Login</h2>
        <div class="content">
            <div class="container">
                <form class="formulario" @submit.prevent="login()">
                    <div class="">
                        <img class="user" src="@/assets/img/user-icon.png">
                    </div>
                    <div class="campos">
                        <label for="email" class="label">Email</label>
                        <input v-model="usuario.username" type="text" placeholder="Email" id="user">
                        <label for="password" class="label password">Password</label>
                        <input v-model="usuario.password" type="password" placeholder="Password" id="password">
                    </div>
                    <input type="submit" class="boton" value="Ingresar" id="boton">
                    <p class="ayuda">Usa <strong> Rick Sanchez, Morty o Summer Smith</strong> como user y <strong>(Alive)</strong> como password para loguearte</p>
                </form>
                <div class="imagenApoyo">
                    <img src="@/assets/img/login.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import apiConection from '@/API/api'
export default {
    data(){
        return {
            usuario:{
                username: null,
                password: null,
                nombre: null,
                perfil: null,
                idVisitante: null
            }
        }
    },
    methods:{
        async login(){
            const {data} = await apiConection.get('/character')
            
            for (let i = 0; i < data.results.length; i++){
                let {id,name,status,species} = data.results[i]
                //console.log(id,name,status,species)
                if (this.usuario.username === name && this.usuario.password === status){
                    this.nombre = name
                    this.perfil = species
                    this.idVisitante = id
                    if ( this.nombre === 'Rick Sanchez' && this.perfil === 'Human' ){
                        this.$router.push({ name: 'Vista_General', params:{ nombre: this.nombre,  perfil: this.perfil, idVisitante: this.idVisitante}})
                    } else if ( this.nombre === 'Morty Smith' && this.perfil === 'Human'){
                        this.$router.push({ name: 'Tabla_Candidatos', params:{ nombre: this.nombre,  perfil: this.perfil, idVisitante: this.idVisitante}})
                    } else if ( this.nombre === 'Summer Smith' && this.perfil === 'Human'){
                         this.$router.push({ name: 'Tabla_Procesos_Entrevista', params:{ nombre: this.nombre,  perfil: this.perfil, idVisitante: this.idVisitante}})
                    }
                }
            }
        }
    }
}
</script>

<style scoped>
*{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter';
  }
  .containerBox{
    min-height: 100vh;
    background-color: #0f74be;
    display: block;
  }
  h2{
      width: 100%;
      margin: 2rem auto 2rem;
      display: inline-block;
      color: #fff;
      font-size: 40px;
      font-weight: bold;
      font-family: 'Inika';
      text-align: center;
  }
  .header{
      padding: 1rem;
      height: 79px;
      display:flex;
      justify-content: space-between;
      align-items: center;
      background-color: #0f74be;
  }
  .header h1{
      max-width: 138px;
      font-size: 0;
      line-height: 1px;
  }
  .container{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .formulario{
      background-color: #01599b;
      width: 100%;;
      max-width: 400px;
      padding: 20px 40px 40px;
      border-radius: 4px;
      box-shadow: 0 4px 4px rgba(0,0,0,.5);
  }
  .user{
      width: 60px;
      display: block;
      margin: 0 auto;
  }
  .user img{
      width: 100%;
      display: block;
  }
  .formulario .label{
      margin: 0 0 .5rem;
      display: block;
      color: #000000;
      font-size: 0.875rem;
      font-weight: bold;
      text-align: left;
  }
  .formulario .label.password{
      margin: 2rem 0 .5rem;
  }
  .formulario input[type="text"],
  .formulario input[type="password"],
  .formulario input[type="submit"]{
      width: 100%;
      display: block;
      border: none;
      border-radius: 5px;
  }
    .formulario input[type="text"],
    .formulario input[type="password"]{
        padding: 16px 10px;
        height: 40px;
    }
    .boton{
      padding: 0 10px;        
      margin: 15px auto 0;
      font-size: 0.875rem;
      font-weight: bold;
      text-align: left;
      width: 100%;
      height: 40px !important;
      background-color: #89D1F3 !important;
      border: 1px solid #89D1F3 !important;
      border-radius: 5px;
      cursor: pointer;
      color: #000000
  }
  .imagenApoyo{
      margin: 20px auto 0;
      display: block;
  }
  .imagenApoyo img{
      width: 100%;
      display: block;
  }
  .ayuda{
    color: black;
    font-size: 12px;
    line-height: 14px;
    margin-top: 10px;
  }
  .ayuda strong{
    color: inherit;
  }

  @media(min-width:769px){
      .titulo{
          font-size: 64px;
          line-height: 64px;
          margin: 0 auto;
      }
      .container{
          max-width: 1000px;
          margin: 0 auto;
          padding: 1rem;
          flex-direction: row;
      }
      .formulario, .imagenApoyo{
          width: 55%;
      }
      .formulario{
          width: 40%;
          padding: 20px 60px 40px;
      }
      .imagenApoyo{
          width: 55%;
          margin: 0;
          max-width: initial;
      }
  }

  @media screen and (max-width: 768px){
      .header{
          display: none;
      }
  }


  @media screen and (max-width: 414px){
      .blueBack .imagenApoyo{
        width: 320px;
        height: 290px;
      }
  }

  @media screen and (max-width: 380px){
    .imagenApoyo{
        max-width: 250px;
    }
  }

</style>