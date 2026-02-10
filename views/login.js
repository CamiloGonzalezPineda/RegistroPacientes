export function login() {
    
    return `
        <form action="" class='loginin'>
     
              <div class='ingresa'>
                 <h2 >Ingresa tu usurio y contraseña</h2>
            </div>
            <div>
                <label for="correo">Correo</label>
                <input type="text" placeholder="Escribe correo">
            </div>
            <div>
                <label for="">Contraseña</label>
                <input id=''type="text" placeholder="Escribe correo">
            </div>
            <div>
                <button type="submit">Ingresar</button>
            </div>
          
            <div>
                <a href="#/registro">Registrate</a>   
            </div>
        </form>
    `

}