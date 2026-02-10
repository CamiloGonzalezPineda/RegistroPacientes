import { render } from "../app.js"
import { login } from "../views/login.js"
import { registro } from "../views/registro.js"
import { datos, form } from "../views/formulario.js"
import { llevarfuncionescitas } from "../views/citas.js"
export function router() {
    
const hash = location.hash || '#/login'

switch (hash) {
    case '#/login':
        render(login())
        break;
    
    case '#/':
        render(form(), true)
        datos()
    llevarfuncionescitas()
        break;
    case '#/registro':
        render(registro())
        break
    default:
                render('❌ 404 - Página no encontrada')
        break;
}
}

