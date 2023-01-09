import { init2 } from "./js/archivos-page";
import { init } from "./js/usuarios-page";


        

import * as CRUD  from './js/crud-provider'; // ojo a la forma de importar

CRUD.getUsuario( 1 ).then( console.log );

CRUD.crearUsuario( {
    name: 'Javier',
    job: 'Desarrollo Web'
}).then( console.log );

CRUD.actualizarUsuario( 1, {
    name: 'Aleth',
    job: 'Social Network'
}).then( console.log );

CRUD.borrarUsuario( 1 ).then( console.log );


init(); 
init2();

