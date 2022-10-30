import swApi from '@/API/API'

export const getinfoRegistro = async (username) => {
    const regFound =  new Promise((resolve, reject) => {
        resolve(swApi).then( (respuesta) => {
            console.log(respuesta)
        })
    })
    console.log(regFound)
    //return regFound
}



/*const getPokemonOptions = async () => {
    const pokeMix = getPokemons().sort(() => Math.random() - 0.5)
    const pokemones = await getPokeNames(pokeMix.splice(0,4))
    return pokemones
}

export const getPokeNames = async ([pokeA,pokeB,pokeC,pokeD] = []) => {

    const promiseArray = [
        pokemonApi.get(`/${ pokeA }`),
        pokemonApi.get(`/${ pokeB }`),
        pokemonApi.get(`/${ pokeC }`),
        pokemonApi.get(`/${ pokeD }`)
    ]

    const [p1,p2,p3,p4] = await Promise.all(promiseArray)
    
    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id}
    ]
}


export default getPokemonOptions*/