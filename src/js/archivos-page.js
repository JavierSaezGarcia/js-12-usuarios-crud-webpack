import { subirImagen } from "./http-provider";



const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {
    
    const html = `
        <h1 class="mt-5">Subir archivos</h1>
        <hr>
        <label class="form-label" for="customFile">Selecciona una fotografía: </label>
        
        <input type="file" class="form-control" id="customFile" accept="image/png, image/jpeg, image/gif" />
        <br> 
        <img id="foto" class="img-thumbnail" src="" />
    
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');


}

const eventos = async() => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        // console.log(file);
       subirImagen( file ).then( url => imgFoto.src = url );
    })
}

export const init2 = () =>  {

    crearInputFileHtml();
    eventos();

}