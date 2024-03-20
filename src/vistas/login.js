import { users } from "../bd/users";
import { panel } from "./panel";
import { registre } from "./registre"; // Asegúrate de importar "registre"
import { header } from "../componentes/header";
let correoUsuarioActual = null;
let sesionActiva = 0;

export const login = {
    template: //html 
    `
        <div class="container">
            <h1 class="mt-5 text-center">Inicia sesión</h1>
            <div class="m-5 mx-auto" style="max-width: 400px">
                <form action="" class="form border shadow-sm p-3">
                    <label for="email" class="form-label">Email:</label>
                    <input required id="email" type="email" class="form-control" />
                    <label for="pass" class="form-label mt-3">Contraseña:</label>
                    <input required minlength="6" id="pass" type="password" class="form-control" />
                    <div class="form-check mt-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label" for="flexCheckChecked">Recordar sesión</label>
                    </div>
                    <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                    <a class="btn btn-primary w-100 mt-3" id="inicioSesion" href="#">Iniciar sesión</a>
                </form>
                <a class="d-block mt-5 btn btn-secondary mx-auto" id="nuevo" href="#">¿Eres nuevo? Regístrate</a>
            </div>
        </div>
    `,
    script: () => {
        document.querySelector('#inicioSesion').addEventListener('click', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value.trim();
            const password = document.querySelector('#pass').value.trim();
            const correoElectronico = document.querySelector('#email').value
            
            // Simular verificación en la base de datos
            let usuarioEncontrado = null;
            users.forEach(usuario => {
                if (usuario.email === email && usuario.password === password) {
                    usuarioEncontrado = usuario;
                }
            });

            

            if (usuarioEncontrado) {
                // Inicio de sesión exitoso
                correoUsuarioActual = email;
                alert('Inicio de sesión exitoso');
                sesionActiva = 1;
                
                document.querySelector('#nombreUsuario').innerHTML=correoElectronico;
                document.querySelector('#nombreUsuario').dataset.rol=usuarioEncontrado.rol
                
                // Llamar al script de panel después de mostrar el mensaje
                document.querySelector('main').innerHTML = panel.template;
                panel.script();
                document.querySelector('#panel').classList.replace('d-none', 'd-inline-block'); 
                document.querySelector('#nombreUsuario').classList.replace('d-none', 'd-inline-block'); 
                document.querySelector('#cerrarSesion').classList.replace('d-none', 'd-inline-block'); 


            } else {
                // Fallo en el inicio de sesión
                alert('Error en el inicio de sesión. Verifica tus credenciales.');
            }
        });

        document.querySelector('#nuevo').addEventListener('click', () => {
            document.querySelector('main').innerHTML = registre.template;
            registre.script();
        });

        document.querySelector('#cerrarSesion').addEventListener('click', () => {
            // Encuentra el índice del usuario actual en el array
            const index = users.findIndex(usuario => usuario.email === correoUsuarioActual);
        
            if (index !== -1) {
                // Elimina el usuario actual del array
                users.splice(index, 1);
        
                // Limpia la sesión actual
                correoUsuarioActual = null;
                sesionActiva = 0;
        
                // Redirige a la página de inicio de sesión
                document.querySelector('main').innerHTML = login.template;
                login.script();
        
                // Oculta elementos relevantes en la barra de navegación
                document.querySelector('#panel').classList.add('d-none');
                document.querySelector('#nombreUsuario').classList.add('d-none');
                document.querySelector('#cerrarSesion').classList.add('d-none');
            }
        });
        
    }
}
