import { bdComentarios } from "../bd/bdComentarios";
import { comentarios } from "../componentes/comentarios";
import { panel } from "./panel";

export const vistaComentarios = {
    template: //html
    `
    <div class="d-flex">
        <h1>Comentarios</h1><button id="btnVolver" class="btn btn-link ms-auto"> < Volver</button>
    </div>
  
    <h2 class="my-4">Código ticket: <span>123456</span></h2>
    <div class="">
        <form action="" class="form card p-3 shadow">
            <label for="comentario" class="form-label">Comentario: </label>
            <textarea id="comentario" class="form-control" col="3"></textarea>
            <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
            <div class="d-flex align-items-center">
                <input id="hora" type="datetime-local" class="form-control w-25">
                <label for="nombre" class="form-label ms-3">Nombre: </label>
                <input id="nombre" type="text" class="form-control w-25">
                <button id="btnAñadir" class="btn btn-success ms-auto">Añadir comentario</button>
            </div>
        </form>
    </div>
    <div id="comentarios" class="mt-4">
      
    </div>
    `,
    script: () => {
        document.querySelector('#btnVolver').addEventListener('click', () => {
            document.querySelector('main').innerHTML = panel.template;
            panel.script();
        });

        const comentariosDiv = document.getElementById('comentarios');
        bdComentarios.forEach(comentario => {
            const comentarioElement = document.createElement('div');
            comentarioElement.classList.add('card', 'p-3');
            comentarioElement.innerHTML = `
                <h5 class="text-end">Autor: <span id="autor">${comentario.autor}</span><span id="fecha" class="ms-4">${comentario.fecha}</span></h5>
                <p id="comentario">${comentario.comentario}</p>
            `;
            comentariosDiv.appendChild(comentarioElement);
        });

        document.querySelector('#btnAñadir').addEventListener('click', (event) => {
            event.preventDefault()
    
            const comentarioInput = document.querySelector('#comentario').value;
            const fechaInput = document.querySelector('#hora').value;
            const autor = document.querySelector('#nombre').value;            
            console.log(autor);
    
            const fechaArray = fechaInput.split('T')[0].split('-')
            const fechaFormateada = `${fechaArray[2]}/${fechaArray[1]}/${fechaArray[0]}`
    
            const nuevoComentario = {
                autor: autor,
                fecha: fechaFormateada,
                comentario: comentarioInput
            }
    
            bdComentarios.push(nuevoComentario)
            comentarios()
  
            document.querySelector('#coment').value = ''
            document.querySelector('#fecha').value = ''
          })
    }
};
