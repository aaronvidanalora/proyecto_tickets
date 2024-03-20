import { header } from "./componentes/header";
import { login } from "./vistas/login";
import { panel } from "./vistas/panel";
import { registre } from "./vistas/registre";

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = registre.template
header.script()
panel.script()