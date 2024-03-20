import { bd } from "../bd/bd";
import { registre } from "./registre";
import { ticket } from "./ticket";
import { vistaComentarios } from "./vistaComentarios";
export const panel = {
  template: //html
  `
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <div class="text-end"><button type="button" id="btnAñadirTicket" class="btn btn-primary text-light"> Añadir Ticket </button></div>
    <table id="tablica" class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table id="tablica" class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
      
      </tbody>
    </table>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Editar Ticket</h5>
          <button type="button" id="btnCerrar" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="" class="form card p-3 shadow" id="editarForm">
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
              <button id="btnEditarTicket" class="btn btn-success ms-auto">Guardar</button>
            </div>
          </form>
        </div>
      </div>
  </div>
  `,
  rol:null,

  script: () => {
 
  document.querySelectorAll('#btnAñadirTicket').forEach(button => {
      button.addEventListener('click', () => {
          document.querySelector('main').innerHTML = ticket.template;
          ticket.script();
      });
  });
 

  function cerrarModal() {
      const modal = document.getElementById('exampleModal');
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open'); // Remover la clase 'modal-open' del body
      const modalBackdrop = document.querySelector('.modal-backdrop');
      if (modalBackdrop) {
          modalBackdrop.remove(); // Remover el elemento del fondo del modal
      }
  }
  
    bd.forEach(panel => {
      const fila = `
        <tr data-ticketid="${panel.codigo}">
          <td>${panel.codigo}</td>
          <td>${panel.fecha}</td>
          <td>${panel.aula}</td>
          <td>${panel.grupo}</td>
          <td>${panel.ordenador}</td>
          <td>${panel.descripcion}</td>
          <td>${panel.alumno}</td>
          ${panel.estado === 'pendiente' ? 
            `<td id="eliminarProfesor"><button class="btn btn-success resolver" title="Resolver ticket">Resolver</button></td>
            <td id="eliminarProfesor"><button class="btn btn-warning añadir" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>` 
            : `<td></td><td></td>`}
          <td><button class="btn btn-info ver" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
          <td id="eliminarProfesor"><button class="btn btn-danger eliminar" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
        </tr>
      `;
      if (panel.estado == 'pendiente') {
        document.querySelector('#tablaPendiente').innerHTML += fila;
      } else {
        document.querySelector('#tablaResuelto').innerHTML += fila;
      }
    });
    
    document.querySelectorAll('.eliminar').forEach(button => {
      button.addEventListener('click', (e) => {
          // Obtiene el ID de la fila a eliminar
          const filaId = e.target.closest('tr').dataset.ticketid;
    
          // Filtra el array bdTicketsPendientes para eliminar el ticket
          const bdTicketsPendientes = bd.filter(item => item.codigo !== filaId || item.estado !== 'pendiente');
          const bdTicketsResueltos = bd.filter(item => item.codigo !== filaId || item.estado !== 'resuelto');
    
          // Actualiza el array bd con los tickets pendientes y resueltos
          let updatedbd = [...bdTicketsPendientes, ...bdTicketsResueltos];
    
          // Elimina la fila del DOM
          e.target.closest('tr').remove();
      });
    });
    // Función para editar un ticket
    function Editar(e) {
      const identificoTicket = e.target.closest('tr'); // Obtener la fila del ticket más cercana al clic
      const pilloTicket = identificoTicket.dataset.ticketid; // Obtener el ID del ticket
      const ticketSeleccionado = bd.find(ticket => ticket.codigo === pilloTicket); // Buscar el ticket en la base de datos
  
      // Mostrar el modal de edición
      const modal = document.getElementById('exampleModal');
      modal.classList.add('show');
      modal.style.display = 'block';
  
      // Llenar el formulario con los valores del ticket seleccionado
      if (ticketSeleccionado) {
        // Formatear la fecha al formato 'YYYY-MM-DD' para el input type="date"
        const fechaFormateada = ticketSeleccionado.fecha.split('/').reverse().join('-');
  
        // Llenar los campos del formulario con los valores del ticket
        document.getElementById('codigo').value = ticketSeleccionado.codigo;
        document.getElementById('fecha').value = fechaFormateada;
        document.getElementById('aula').value = ticketSeleccionado.aula;
        document.getElementById('ordenador').value = ticketSeleccionado.ordenador;
        document.getElementById('descripcion').value = ticketSeleccionado.descripcion;
        document.getElementById('alumno').value = ticketSeleccionado.alumno;
        document.getElementById('grupo').value = ticketSeleccionado.grupo;
      }
  
      // Función para guardar los cambios al presionar el botón de guardar
      const guardarCambios = (event) => {
        event.preventDefault(); // Evitar el envío del formulario
  
        // Obtener los valores editados del formulario
        const codigo = document.getElementById('codigo').value;
        const fecha = document.getElementById('fecha').value;
        const aula = document.getElementById('aula').value;
        const ordenador = document.getElementById('ordenador').value;
        const descripcion = document.getElementById('descripcion').value;
        const alumno = document.getElementById('alumno').value;
        const grupo = document.getElementById('grupo').value;
  
        // Actualizar los valores del ticket seleccionado en la base de datos
        bd.forEach(ticket => {
          if (ticket.codigo === pilloTicket) {
            ticket.codigo = codigo;
            ticket.fecha = fecha;
            ticket.aula = aula;
            ticket.ordenador = ordenador;
            ticket.descripcion = descripcion;
            ticket.alumno = alumno;
            ticket.grupo = grupo;
            if (ticket.estado === 'pendiente') {
              ticket.estado = 'resuelto'; // Cambiar el estado a 'resuelto' al guardar cambios
            }
          }
        });
  
        // Cerrar el modal de edición
        cerrarModal();
  
        // Volver a cargar el panel para mostrar los cambios
        document.querySelector('main').innerHTML = panel.template;
        panel.script();
      };
  
      // Asignar el evento click al botón de guardar dentro del modal
      document.getElementById('btnEditarTicket').addEventListener('click', guardarCambios);
  
      // Función para cerrar el modal si se hace clic en el botón de cerrar
      const cerrarModal = () => {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Remover la clase 'modal-open' del body
        const modalBackdrop = document.querySelector('.modal-backdrop');
        if (modalBackdrop) {
          modalBackdrop.remove(); // Remover el elemento del fondo del modal
        }
      };
  
      // Asignar el evento click al botón de cerrar dentro del modal
      document.getElementById('btnCerrar').addEventListener('click', cerrarModal);
    }
    

    document.querySelectorAll('.añadir').forEach(añadir => {
      añadir.addEventListener('click', Editar);
    });
    
    // Función para resolver un ticket
    function Resolver(e) {
      const identificoTicket = e.target.closest('tr'); // Obtener la fila del ticket más cercana al clic
      const pilloTicket = identificoTicket.dataset.ticketid; // Obtener el ID del ticket
  
      // Cambiar el estado del ticket a 'resuelto'
      bd.forEach(ticket => {
        if (ticket.codigo === pilloTicket && ticket.estado === 'pendiente') {
          ticket.estado = 'resuelto';
        }
      });
  
      // Mover el ticket resuelto a la tabla de tickets resueltos
      identificoTicket.querySelector('.resolver').remove(); // Remover el botón de resolver
      identificoTicket.querySelector('.añadir').remove(); // Remover el botón de añadir comentario
      const tablaResuelto = document.querySelector('#tablaResuelto');
      tablaResuelto.appendChild(identificoTicket);
  
      // Volver a cargar el panel para mostrar los cambios
      document.querySelector('main').innerHTML = panel.template;
      panel.script();
    }
  
    // Asignar evento click a los botones de resolver
    document.querySelectorAll('.resolver').forEach(button => {
      button.addEventListener('click', Resolver);
    });

  
  
    document.querySelectorAll('#btnAñadirTicket').forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('main').innerHTML = ticket.template;
        ticket.script();
      });
    });
  
    // Asignar evento click a los botones de ver comentarios
    document.querySelectorAll('.ver').forEach(button => {
      button.addEventListener('click', () => {
        // Cargar la vista de ver comentarios
        document.querySelector('main').innerHTML = vistaComentarios.template;
        vistaComentarios.script();
      });
    });
  
    // Función para cerrar el modal si se hace clic fuera del mismo
    document.getElementById('exampleModal').addEventListener('click', (event) => {
      if (event.target === document.getElementById('exampleModal')) {
        cerrarModal();
      }
    });

    // Obtener el rol del usuario
   panel.rol = document.querySelector('#nombreUsuario').dataset.rol;
   console.log(panel.rol);

 
    if (panel.rol === 'profesor') {
      document.querySelectorAll(' .btn-success').forEach(boton => {
          boton.classList.add('d-none');
      });
      document.querySelectorAll('#tablaPendiente .btn-warning').forEach(boton => {
          boton.classList.add('d-none');
      });
      document.querySelectorAll(' .btn-danger').forEach(boton => {
          boton.classList.add('d-none');
      });
  }
  




  if (panel.rol == 'usuario') {
    document.querySelectorAll('table').forEach(boton => {
      boton.classList.add('d-none');
  });
      
  }
  }
  };

  document.querySelectorAll('.editar').forEach(button => {
    button.addEventListener('click', Editar);
  });
  
  // Función para cerrar el modal si se hace clic fuera del mismo
  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('exampleModal').addEventListener('click', (event) => {
    if (event.target === document.getElementById('exampleModal')) {
      cerrarModal();
    }

  
    
  });
  });
  
  