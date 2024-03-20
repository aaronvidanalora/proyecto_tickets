import { login } from "../vistas/login"
import { panel } from "../vistas/panel"
import { registre } from "../vistas/registre"

export const header = {
      // poner el d-none en la clase de panel cuando acabe las pruebas

    template: // html
    `
    <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
      <div>

        <button id="panel" class="btn btn-secondary ms-2 d-none">PANEL</button>
        <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
        <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
      </div>
      <div>
            <span id="nombreUsuario" class="d-none"></span>
            <button id="cerrarSesion" class="d-none btn btn-secondary ms-2">CERRAR SESIÓN</button>
        </div>
    </div>
  </nav>
    `,
    script:()=>{
         document.querySelector('#panel').addEventListener('click', (e)=>{
           e.preventDefault();
             document.querySelector('main').innerHTML = panel.template
             panel.script()
         })
        document.querySelector('#login').addEventListener('click', (e)=>{
          e.preventDefault();
            document.querySelector('main').innerHTML = login.template
            login.script()
        })
        document.querySelector('#registro').addEventListener('click',(e)=>{
          e.preventDefault();
            document.querySelector('main').innerHTML = registre.template
            registre.script()
        })
    }
}