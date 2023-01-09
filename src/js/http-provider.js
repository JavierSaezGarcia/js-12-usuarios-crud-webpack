const urlUsuarios = 'https://reqres.in/api/users?page=2';


const obtenerUsuarios = async() => {

    const resp = await fetch( urlUsuarios );
    const data = await resp.json();

    console.log( data );


}

export {
    obtenerUsuarios
}