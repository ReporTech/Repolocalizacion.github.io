import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"
import { MdNavigationDrawer } from "../lib/js/custom/MdNavigationDrawer.js"

export class NavDrw extends MdNavigationDrawer {

 /**
  * @override
  */
 getHipervinculos() {
  return /* HTML */`
   <h1>PWA con MD</h1>

   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">public</span>
        Gps
   </a>

      <a ${resaltaSiEstasEn(["/archivos.html"])} href="archivos.html">
        <span class="material-symbols-outlined">
backup
</span>
        Archivos
      </a>

      <a ${resaltaSiEstasEn(["/camara.html", "", "/"])} href="camara.html">
    <span class="material-symbols-outlined">
photo_camera
</span>
        Cámara
   </a>

   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">help</span>
    Ayuda
   </a>`
 }

}

customElements.define("nav-drw", NavDrw)