import axios from 'axios'

const apiConection = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
    //baseURL: 'http://localhost:8081'
})


export default apiConection