import { header } from "./componentes/header.js";
import { router } from "./router/router.js";

export function render(contenido,showHeader= false) {
    const app = document.getElementById('app')
    

    app.innerHTML = `
    ${showHeader ? header() : ''}
     <div class='contenidoagregado'>
     
    ${contenido}

     </div>
 
   
    
    `
        

}


window.addEventListener('DOMContentLoaded', router)
window.addEventListener('hashchange', router)

