import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccionComponent.js";
import { obtenerNav } from "./componentes/nave-/navComponent.js";

function seccion() {
    let seccion = document.createElement('section');

    seccion.appendChild(header());
    seccion.appendChild(seccion1());
    seccion.appendChild(obtenerNav());

    console.log("hola mundo");
    return seccion;
}

document.body.appendChild(seccion());
