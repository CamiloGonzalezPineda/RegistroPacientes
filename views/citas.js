import { db } from "../DB/db.js"
import { setDatosNuevos } from "./formulario.js"
export function citas() {

    return `
    <section id="visualizar">
        <h1 class='tici'>Lista de citas Pendientes</h1>

    <div id='agregadas'>    

    </div>
    
    </section>
    `
}
export function mostrarcitas() {
    const constenido = document.getElementById('agregadas')
constenido.innerHTML=''
    db.pacientes.forEach(persona => {
        
        const caja = document.createElement('div')
        caja.classList.add('cuadro')

        caja.innerHTML=`

<p class='texto'><strong>NOMBRE:</strong>   ${persona.nombre}</p>
<p class='texto'><strong>EDAD:</strong>   ${persona.edad}</p>
<p class='texto'><strong>CELULAR:</strong>  ${persona.celular}</p>
<p class='texto'><strong>DIAGNOSTICO:</strong>  ${persona.diagnostico}</p>
<p class='texto'><strong>FECHA:</strong>  ${persona.fecha}</p>
<p class='texto'><strong>Hora:</strong>  ${persona.hora}</p>

            <div  class='btnsa'>
            
                <button data-id='${persona.id}' class='edi'>EDITAR
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                </button> 

               <button data-id='${persona.id}'  class='elim'>ELIMINAR
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
               </button>
               </div>


             </button>     
    `
        constenido.appendChild(caja)
    });
}

export function clickEditar() {
    document.addEventListener('click',(e)=>{
        const boton = e.target.closest('.edi')
        if(!boton) return
        const id = boton.dataset.id
        setDatosNuevos(id)
        renderizarInput(id)
    })
}
export function renderizarInput(id) {
    const cita = db.pacientes.find(c=> c.id === id)
        if(!cita) return

        document.getElementById('nombre').value = cita.nombre
        document.getElementById('edad').value = cita.edad
        document.getElementById('celular').value = cita.celular
        document.getElementById('diagnostico').value = cita.diagnostico
        document.getElementById('fecha').value = cita.fecha  
} 

/**FUNTION FOR DELETE */
export function clickEliminar() {
document.addEventListener('click',(e)=>{
    const btneliminar = e.target.closest('.elim')
    if(!btneliminar) return

    const eliminar = btneliminar.dataset.id

    db.pacientes = db.pacientes.filter(paciente => paciente.id !== eliminar)
    mostrarcitas()
    console.log('click')
})
}


export function llevarfuncionescitas() {
    mostrarcitas()
    clickEditar()
    clickEliminar()
}
// export function mostrarcitas() {

//     const contenido = document.getElementById('agregadas')
//     contenido.textContent = ''
//     db.pacientes.forEach(paciente => {
//         const div = document.createElement('div')
//         div.classList.add('cuadro')

//         div.innerHTML = `

//             <p> <strong>NOMBRE: </strong> ${paciente.nombre} </p>
         
//             <p> <strong>EDAD: </strong> ${paciente.edad}</p>

//             <p> <strong>CELULAR: </strong> ${paciente.celular}</p>

//             <p> <strong>DIAGNOSTICO: </strong> ${paciente.diagnostico}</p>

//             <p> <strong>FECHA: </strong> ${paciente.fecha}</p>
//             <div class='btnsa'> <span class='edi'>EDITAR
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
//             </span> 
//             <span class='edi elim'>ELIMINAR
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
//             </span>
//              </div>
//         `
//         contenido.appendChild(div)
//     });

// }


// export function clickEliminar() {
//     document.addEventListener('click', (e)=>{
//         const boton = e.target.closest('.elim')
//         if(!boton) return
//         const idelim = boton.dataset.id
//         eliminarcita(idelim)
//         mostrarcitas()
//         console.log('click')
//     })
// }

// export function eliminarcita(id) {
//     db.pacientes = db.pacientes.filter(e=>e.id !== id)
        
  
// }
