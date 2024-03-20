import { bd } from "../bd/bd";
import { panel } from "./panel";

export const ticket = {
  
    template:  //html
    `
        <label for="codigoTicket" class="form-label">Código: </label>
        <input type="text" class="form-control mb-3" id="codigo">

        <label for="fecha" class="form-label">Fecha: </label>
        <input type="date" class="form-control mb-3" id="fecha">

        <label for="aula" class="form-label">Aula: </label>
        <input type="text" class="form-control mb-3" id="aula">

        <label for="ordenador" class="form-label">Ordenador: </label>
        <input type="text" class="form-control mb-3" id="ordenador">

        <label for="descripcion" class="form-label">Descripción: </label>
        <textarea class="form-control mb-3" id="descripcion" rows="3"></textarea>

        <label for="alumno" class="form-label">Alumno: </label>
        <input type="text" class="form-control mb-3" id="alumno">

        <label for="grupo" class="form-label">Grupo: </label>
        <input type="text" class="form-control mb-3" id="grupo">

        <div class="d-flex align-items-center">
          <button id="btnAñadirTicket" class="btn btn-success me-2">Añadir</button>
          <div class="ms-2"></div> <!-- Espacio entre botones -->
          <button id="btnSalir" class="btn btn-warning">Salir</button>
        </div>
      
    `,

    script : ()=>{

        document.querySelector('#btnSalir').addEventListener('click',(e)=>{
            document.querySelector('main').innerHTML = panel.template
            panel.script()
        });

        document.querySelector('#btnAñadirTicket').addEventListener('click',()=>{
       
            const codigo =  parseInt(document.getElementById('codigo').value)
            const aula = document.getElementById('aula').value
            const ordenador = document.getElementById('ordenador').value
            const descripcion = document.getElementById('descripcion').value
            const alumno = document.getElementById('alumno').value
            const grupo = document.getElementById('grupo').value
        
            var fechaMAL = document.querySelector('#fecha').value
            var fechaDividida = fechaMAL.split('-')
            var fecha = fechaDividida[2] + '/' + fechaDividida[1] + '/' + fechaDividida[0] 
        
            const ultimoId = bd.length > 0 ? bd[bd.length - 1].id : 0
        
            const bdNuevoTicket = {
                id: ultimoId + 1,
                codigo,
                fecha,
                aula,
                grupo,
                ordenador,
                descripcion,
                alumno,
                estado: 'pendiente'
            }
        
            bd.push(bdNuevoTicket)
        
            document.querySelector('main').innerHTML= panel.template
            panel.script()
        
        
            });
        
        
        
  } 
}