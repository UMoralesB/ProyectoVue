const autorizationGuard = ( to, from, next ) => {
    console.log( {to, from, next} )
    return new Promise( () => {
        if (this.name === 'Rick Sanchez') {
            console.log('tiene acceso')
            next()
        } else {
            console.log('no tiene acceso')
            next( {name:'LoginPage'} )
        }
    })
}





export default autorizationGuard