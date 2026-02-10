import { db } from "../DB/db.js"
import { citas, mostrarcitas} from "./citas.js"
export function form() {

    return `
        <section id="agregarCitas">
            <form id='form' action="">
              <h2>Ingrese datos del Paciente</h2>

                <div>
                          <label  for="nombre">Nombre Paciente</label>
                          <input id='nombre' type="text" placeholder="Escribe Nombre" name='nombre'>
                </div>
                <div>
                          <label for="edad">Edad Paciente</label>
                          <input id='edad' type="text" placeholder="Escribe Edad" name='edad'>
                </div>
                <div>
                          <label for="celular">Celular Paciente</label>
                          <input id='celular' type="tel"placeholder="Escribe Celular" name='celular'>
                </div>

                <div>
                          <label for="diagnostico">Diagnostico Paciente</label>
                          <textarea id='diagnostico' placeholder="Escribe Razones consulta" name='diagnostico' ></textarea>
                </div>
                <div>
                          <label for="fecha" name='fecha'>Fecha</label>
                          <input id='fecha' type="date" name='fecha' >
                </div>

                <div>
                    <button>Agregar</button>
                </div>
          
            </form>
      
        </section>
          ${citas()}
    `
}
export let datosnuevos = null  // tu variable de estado

// función para actualizarla desde otro archivo
export function setDatosNuevos(id) {
  datosnuevos = id
}
export function datos() {
    
    const datosformulario = document.getElementById('form')

    datosformulario.addEventListener('submit',(e)=>{
        e.preventDefault()


      if (datosnuevos) {
        actualizarform(datosformulario)
      }else{
        creacita(datosformulario)
      }

       
    })
}


export function creacita(form) {
            const dataform = new FormData(form)

        const citas={
            id: crypto.randomUUID(),
            nombre: dataform.get('nombre'),
            edad: dataform.get('edad'),
            celular: dataform.get('celular'),
            diagnostico: dataform.get('diagnostico'),
            fecha: dataform.get('fecha'),
            hora: dataform.get('hora') ||  new Date().toTimeString().slice(0,8)
        }

        db.pacientes.push(citas)
        mostrarcitas()
       form.reset()
}

export function actualizarform(form) {
    const citas = db.pacientes.find(editarid => editarid.id === datosnuevos)
    if(!citas) return

    const nuevosDatos = new FormData(form)

      const ncitas={
            nombre:nuevosDatos.get('nombre'),
            edad:nuevosDatos.get('edad'),
            celular:nuevosDatos.get('celular'),
            diagnostico:nuevosDatos.get('diagnostico'),
            fecha:nuevosDatos.get('fecha'),
            hora:nuevosDatos.get('hora') || citas.hora
         
        }
Object.assign(citas, ncitas)

    mostrarcitas()
    form.reset()
    datosnuevos = null

}


// export function datos() {
//     const formulario = document.getElementById('form')

//     formulario.addEventListener('submit',(e)=>{
//         e.preventDefault()

//         const datoss = new FormData(formulario)

//       const  cita={
//             nombre: datoss.get('nombre'),
//             edad: datoss.get('edad'),
//             celular: datoss.get('celular'),
//             diagnostico: datoss.get('diagnostico'),
//             fecha: datoss.get('fecha')
//         }
//         db.pacientes.push(cita)
//         mostrarcitas()
//           formulario.reset()
//         console.table(db.pacientes)
//     })


// }

