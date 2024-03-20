(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();let u=[];const m=[{codigo:"567812",fecha:"20/04/2023",aula:"L3",grupo:"DAW2",ordenador:"PC1",descripcion:"Problema con el software",alumno:"Carlos Pérez",estado:"pendiente"},{codigo:"789034",fecha:"22/04/2023",aula:"C2",grupo:"DIW1",ordenador:"PC2",descripcion:"No hay conexión a Internet",alumno:"Laura Gómez",estado:"resuelto"},{codigo:"456789",fecha:"25/04/2023",aula:"A4",grupo:"DIW2",ordenador:"PC4",descripcion:"Problema con la pantalla",alumno:"David López",estado:"pendiente"},{codigo:"987654",fecha:"28/04/2023",aula:"B5",grupo:"DAW1",ordenador:"PC5",descripcion:"No enciende la computadora",alumno:"Elena Ramírez",estado:"resuelto"}],h={template:`
    <div class="container">
    <h1 class="mt-5 text-center">Registro</h1>
    <div class="m-5 mx-auto" style="max-width: 400px">
        <form action="" class="form border shadow-sm p-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input required id="nombre" type="text" class="form-control" />
            <label for="apellidos" class="form-label">Apellidos:</label>
            <input id="apellidos" type="text" class="form-control" />
            <label for="email" class="form-label">Email:</label>
            <input required id="email" type="text" class="form-control" />
            <label for="pass" class="form-label mt-3">Contraseña:</label>
            <input required minlength="6" id="pass" type="password" class="form-control" />

            <label class="form-label mt-3">Tipo de usuario:</label>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="rol" id="usuario" value="usuario">
            <label class="form-check-label" for="usuario">Usuario</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="rol" id="profesor" value="profesor">
            <label class="form-check-label" for="profesor">Profesor</label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="rol" id="administrador" value="administrador">
            <label class="form-check-label" for="administrador">Administrador</label>
        </div>

            <a class="btn btn-primary w-100 mt-3" id="enviar" href="#">Enviar</a>
        </form>
    </div>
</div>

    `,script:()=>{document.querySelector("#enviar").addEventListener("click",a=>{var b;a.preventDefault();const r=document.querySelector("#nombre").value.trim(),c=document.querySelector("#apellidos").value.trim(),e=document.querySelector("#email").value.trim(),t=document.querySelector("#pass").value.trim(),o=(b=document.querySelector('input[name="rol"]:checked'))==null?void 0:b.value;if(!r||!c||!e||!t||!o){alert("Por favor, completa todos los campos obligatorios.");return}const l={nombre:r,apellidos:c,email:e,password:t,rol:o};let i=!1;if(u.forEach(p=>{p.email===e&&(i=!0)}),i)alert("Este correo ya ha sido usado");else{u.push(l);const p=JSON.stringify(u);localStorage.setItem("registroLocal",p),console.log(u),u?(alert("Tu usuario ha sido registrado correctamente"),document.querySelector("main").innerHTML=f.template,f.script()):alert("No se guardó correctamente en la base de datos")}})}},v={template:`
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
      
    `,script:()=>{document.querySelector("#btnSalir").addEventListener("click",a=>{document.querySelector("main").innerHTML=n.template,n.script()}),document.querySelector("#btnAñadirTicket").addEventListener("click",()=>{const a=parseInt(document.getElementById("codigo").value),r=document.getElementById("aula").value,c=document.getElementById("ordenador").value,e=document.getElementById("descripcion").value,t=document.getElementById("alumno").value,o=document.getElementById("grupo").value;var l=document.querySelector("#fecha").value,i=l.split("-"),b=i[2]+"/"+i[1]+"/"+i[0];const s={id:(m.length>0?m[m.length-1].id:0)+1,codigo:a,fecha:b,aula:r,grupo:o,ordenador:c,descripcion:e,alumno:t,estado:"pendiente"};m.push(s),document.querySelector("main").innerHTML=n.template,n.script()})}},g=[{id:0,autor:"Carlos",fecha:"13/11/2023",comentario:"Muy buena película"},{id:1,autor:"Ana",fecha:"15/11/2023",comentario:"Interesante artículo, gracias por compartir."},{id:2,autor:"David",fecha:"20/11/2023",comentario:"Me encantó el concierto, la banda estuvo genial."},{id:3,autor:"María",fecha:"25/11/2023",comentario:"El libro me pareció fascinante, no pude soltarlo hasta terminarlo."}],M=(a,r,c)=>`
    <div class="card p-3 m-2">
        <h5 class="text-end">Autor: <span id="nombre">${a}</span><span id="fecha" class="ms-4">${r}</span></h5>
        <p id="comentario">${c}</p>
    </div>
    `,B=()=>{let a="";g.forEach(r=>{a+=M(r.autor,r.fecha,r.comentario)}),document.querySelector("#comentarios").innerHTML=a},E={template:`
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
    `,script:()=>{document.querySelector("#btnVolver").addEventListener("click",()=>{document.querySelector("main").innerHTML=n.template,n.script()});const a=document.getElementById("comentarios");g.forEach(r=>{const c=document.createElement("div");c.classList.add("card","p-3"),c.innerHTML=`
                <h5 class="text-end">Autor: <span id="autor">${r.autor}</span><span id="fecha" class="ms-4">${r.fecha}</span></h5>
                <p id="comentario">${r.comentario}</p>
            `,a.appendChild(c)}),document.querySelector("#btnAñadir").addEventListener("click",r=>{r.preventDefault();const c=document.querySelector("#comentario").value,e=document.querySelector("#hora").value,t=document.querySelector("#nombre").value;console.log(t);const o=e.split("T")[0].split("-"),l=`${o[2]}/${o[1]}/${o[0]}`,i={autor:t,fecha:l,comentario:c};g.push(i),B(),document.querySelector("#coment").value="",document.querySelector("#fecha").value=""})}},n={template:`
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
  `,rol:null,script:()=>{document.querySelectorAll("#btnAñadirTicket").forEach(e=>{e.addEventListener("click",()=>{document.querySelector("main").innerHTML=v.template,v.script()})});function a(){const e=document.getElementById("exampleModal");e.classList.remove("show"),e.style.display="none",document.body.classList.remove("modal-open");const t=document.querySelector(".modal-backdrop");t&&t.remove()}m.forEach(e=>{const t=`
        <tr data-ticketid="${e.codigo}">
          <td>${e.codigo}</td>
          <td>${e.fecha}</td>
          <td>${e.aula}</td>
          <td>${e.grupo}</td>
          <td>${e.ordenador}</td>
          <td>${e.descripcion}</td>
          <td>${e.alumno}</td>
          ${e.estado==="pendiente"?`<td id="eliminarProfesor"><button class="btn btn-success resolver" title="Resolver ticket">Resolver</button></td>
            <td id="eliminarProfesor"><button class="btn btn-warning añadir" title="Añadir comentario"><i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></button></td>`:"<td></td><td></td>"}
          <td><button class="btn btn-info ver" title="Ver comentarios"><i class="bi bi-chat-left-text"></i></button></td>
          <td id="eliminarProfesor"><button class="btn btn-danger eliminar" title="Eliminar ticket"><i class="bi bi-trash3"></i></button></td>
        </tr>
      `;e.estado=="pendiente"?document.querySelector("#tablaPendiente").innerHTML+=t:document.querySelector("#tablaResuelto").innerHTML+=t}),document.querySelectorAll(".eliminar").forEach(e=>{e.addEventListener("click",t=>{const o=t.target.closest("tr").dataset.ticketid;m.filter(l=>l.codigo!==o||l.estado!=="pendiente"),m.filter(l=>l.codigo!==o||l.estado!=="resuelto"),t.target.closest("tr").remove()})});function r(e){const o=e.target.closest("tr").dataset.ticketid,l=m.find(s=>s.codigo===o),i=document.getElementById("exampleModal");if(i.classList.add("show"),i.style.display="block",l){const s=l.fecha.split("/").reverse().join("-");document.getElementById("codigo").value=l.codigo,document.getElementById("fecha").value=s,document.getElementById("aula").value=l.aula,document.getElementById("ordenador").value=l.ordenador,document.getElementById("descripcion").value=l.descripcion,document.getElementById("alumno").value=l.alumno,document.getElementById("grupo").value=l.grupo}const b=s=>{s.preventDefault();const L=document.getElementById("codigo").value,q=document.getElementById("fecha").value,k=document.getElementById("aula").value,x=document.getElementById("ordenador").value,I=document.getElementById("descripcion").value,A=document.getElementById("alumno").value,T=document.getElementById("grupo").value;m.forEach(d=>{d.codigo===o&&(d.codigo=L,d.fecha=q,d.aula=k,d.ordenador=x,d.descripcion=I,d.alumno=A,d.grupo=T,d.estado==="pendiente"&&(d.estado="resuelto"))}),p(),document.querySelector("main").innerHTML=n.template,n.script()};document.getElementById("btnEditarTicket").addEventListener("click",b);const p=()=>{i.classList.remove("show"),i.style.display="none",document.body.classList.remove("modal-open");const s=document.querySelector(".modal-backdrop");s&&s.remove()};document.getElementById("btnCerrar").addEventListener("click",p)}document.querySelectorAll(".añadir").forEach(e=>{e.addEventListener("click",r)});function c(e){const t=e.target.closest("tr"),o=t.dataset.ticketid;m.forEach(i=>{i.codigo===o&&i.estado==="pendiente"&&(i.estado="resuelto")}),t.querySelector(".resolver").remove(),t.querySelector(".añadir").remove(),document.querySelector("#tablaResuelto").appendChild(t),document.querySelector("main").innerHTML=n.template,n.script()}document.querySelectorAll(".resolver").forEach(e=>{e.addEventListener("click",c)}),document.querySelectorAll("#btnAñadirTicket").forEach(e=>{e.addEventListener("click",()=>{document.querySelector("main").innerHTML=v.template,v.script()})}),document.querySelectorAll(".ver").forEach(e=>{e.addEventListener("click",()=>{document.querySelector("main").innerHTML=E.template,E.script()})}),document.getElementById("exampleModal").addEventListener("click",e=>{e.target===document.getElementById("exampleModal")&&a()}),n.rol=document.querySelector("#nombreUsuario").dataset.rol,console.log(n.rol),n.rol==="profesor"&&(document.querySelectorAll(" .btn-success").forEach(e=>{e.classList.add("d-none")}),document.querySelectorAll("#tablaPendiente .btn-warning").forEach(e=>{e.classList.add("d-none")}),document.querySelectorAll(" .btn-danger").forEach(e=>{e.classList.add("d-none")})),n.rol=="usuario"&&document.querySelectorAll("table").forEach(e=>{e.classList.add("d-none")})}};document.querySelectorAll(".editar").forEach(a=>{a.addEventListener("click",Editar)});document.addEventListener("DOMContentLoaded",function(){document.getElementById("exampleModal").addEventListener("click",a=>{a.target===document.getElementById("exampleModal")&&cerrarModal()})});let y=null;const f={template:`
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
    `,script:()=>{document.querySelector("#inicioSesion").addEventListener("click",a=>{a.preventDefault();const r=document.querySelector("#email").value.trim(),c=document.querySelector("#pass").value.trim(),e=document.querySelector("#email").value;let t=null;u.forEach(o=>{o.email===r&&o.password===c&&(t=o)}),t?(y=r,alert("Inicio de sesión exitoso"),document.querySelector("#nombreUsuario").innerHTML=e,document.querySelector("#nombreUsuario").dataset.rol=t.rol,document.querySelector("main").innerHTML=n.template,n.script(),document.querySelector("#panel").classList.replace("d-none","d-inline-block"),document.querySelector("#nombreUsuario").classList.replace("d-none","d-inline-block"),document.querySelector("#cerrarSesion").classList.replace("d-none","d-inline-block")):alert("Error en el inicio de sesión. Verifica tus credenciales.")}),document.querySelector("#nuevo").addEventListener("click",()=>{document.querySelector("main").innerHTML=h.template,h.script()}),document.querySelector("#cerrarSesion").addEventListener("click",()=>{const a=u.findIndex(r=>r.email===y);a!==-1&&(u.splice(a,1),y=null,document.querySelector("main").innerHTML=f.template,f.script(),document.querySelector("#panel").classList.add("d-none"),document.querySelector("#nombreUsuario").classList.add("d-none"),document.querySelector("#cerrarSesion").classList.add("d-none"))})}},S={template:`
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
    `,script:()=>{document.querySelector("#panel").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=n.template,n.script()}),document.querySelector("#login").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=f.template,f.script()}),document.querySelector("#registro").addEventListener("click",a=>{a.preventDefault(),document.querySelector("main").innerHTML=h.template,h.script()})}};document.querySelector("header").innerHTML=S.template;document.querySelector("main").innerHTML=h.template;S.script();n.script();
