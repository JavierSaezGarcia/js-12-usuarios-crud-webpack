const urlUsuarios = 'https://reqres.in/api/users?page=2';

const cloudKey = 'upload_preset';
const cloudValue = 'okr4w8yz';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dckvdvxnk/upload';


const obtenerUsuarios = async() => {

    try {

        const resp = await fetch( urlUsuarios );
        const { data: usuarios } = await resp.json();

        return usuarios;
        
    } catch (error) {

        throw error
        
    }
    


}

const subirImagen = async( archivoSubir ) => {

    const formData = new FormData();
    formData.append( cloudKey, cloudValue ); 
    formData.append('file', archivoSubir ); 

    try {
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if( resp.ok ) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw await respuesta.json();
        }
    } catch (error) {
        throw error;
    }


}

export {
    obtenerUsuarios,
    subirImagen
}