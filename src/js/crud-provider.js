const urlCRUD = 'https://reqres.in/api/users';

const getUsuario = async( id ) => {

    const resp = await fetch(`${ urlCRUD }/${ id }`);
    const { data:usuario } =  await resp.json();
    return usuario;

}

const crearUsuario = async( usuario ) => {

    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}
const actualizarUsuario = async( id, usuario ) => {

    const resp = await fetch( `${ urlCRUD }/${ id }`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}

const borrarUsuario = async( id ) => {

    const resp = await fetch( `${ urlCRUD }/${ id }`, {
        method: 'DELETE'
    });
    return ( resp.ok ) ? `Registro con id: ${ id } Borrado` : 'Error de borrado';
}

export {
    getUsuario,
    crearUsuario,
    actualizarUsuario, 
    borrarUsuario
}



