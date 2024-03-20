import { bdComentarios } from "../bd/bdComentarios"
import { comentario } from "./comentario"

export const comentarios = () => {
    let html = ''

    bdComentarios.forEach(element => {
        html += comentario(element.autor,element.fecha,element.comentario)
    })

    document.querySelector('#comentarios').innerHTML = html
}