/*Introducción al DOM 
los siguientes metodos del DOM son para acceder o solicitar ciertas partes de nuestro proyecto
html.*/ 

/*console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.scripts);
console.log(document.forms);
console.log(document.documentElement);//Accede a la etiqueta html
console.log(document.doctype);
console.log(document.links);
console.log(document.characterSet);
console.log(document.images);
console.log(document.styleSheets);
console.log(document.title);
setTimeout(()=>{
    console.log(document.getSelection().toString());//Obtiene y convierte en string lo que se seleccione en el documento.
},3000);

//document.write("<h2>Prueba de un document.write</h2>");

console.log(document.getElementsByTagName("li"));//Mas rapidos pero ya no ocupados tanto actualmente
console.log(document.getElementsByClassName("cards"));//Mas rapidos pero ya no ocupados tanto actualmente
console.log(document.getElementsByClassName("card"));//Mas rapidos pero ya no ocupados tanto actualmente
console.log(document.getElementById("menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
console.log(document.querySelectorAll("#menu"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll("#menu li" ));
document.querySelectorAll(".card").forEach((element)=>console.log(element));


console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));
//Cambiar el valor de html desde JavaScript(este solo sera visible en el navegador).
document.documentElement.lang="es-MX";
//Asignar el valor de una parte del DOM a un html
const $linkDOM = document.querySelector(".link-dom");//Todas las variables que guarden el simbolo del dolar es una buena practica poner la variable con el signo del dolar.
//Cambiar el modo en el que se abre el link del DOM a una nueva pestaña.
$linkDOM.setAttribute("target", "_blank");
//Seguridad/indicar que el link no depende de la pagina principal.
$linkDOM.setAttribute("rel","noopener");
//Cambiar el link del enlace
$linkDOM.setAttribute("href","https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction");
//Ver si el valor cuenta con un cierto elemento
console.log($linkDOM.hasAttribute("rel"));
//remover un atributo del DOM
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Con la nueva funcionalidad de JavaScript (Data-)
console.log($linkDOM.getAttribute("data-description"));//Obtiene la descripción que le pusimos al data.
//Nos arroja la descripcion que le colocamos en un un Map
console.log($linkDOM.dataset);
//Nos muestra el nombre que le colocamos con con el metodo de data de una atibuto en especifico pero sin estar en un MAP
console.log($linkDOM.dataset.description);
//Cambiar la descripción que le habiamos colocado.
$linkDOM.dataset.description="mas información del DOM";
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.getAttribute("data-id"));
console.log($linkDOM.dataset.id);
console.log($linkDOM.dataset);

*/
document.documentElement.lang="es-MX";
//Asignar el valor de una parte del DOM a un html
const $linkDOM = document.querySelector(".link-dom");//Todas las variables que guarden el simbolo del dolar es una buena practica poner la variable con el signo del dolar.
//Cambiar el modo en el que se abre el link del DOM a una nueva pestaña.
$linkDOM.setAttribute("target", "_blank");
//Seguridad/indicar que el link no depende de la pagina principal.
$linkDOM.setAttribute("rel","noopener");
//Cambiar el link del enlace
$linkDOM.setAttribute("href","https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction");


console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//Cambiar o asignar valores en los estilos

//Decorar el estilo de la fuente o texto
$linkDOM.style.setProperty("text-decoration","none");
//Tipo de display del link
$linkDOM.style.setProperty("display","block");
//Ancho
$linkDOM.style.width="50%";
//Alineación del texto
$linkDOM.style.textAlign="center";
//Margen derecho
$linkDOM.style.marginLeft="auto";
//margen izquierdo
$linkDOM.style.marginRight="auto";
//Pading
$linkDOM.style.padding="1rem";
//tipo de borde
$linkDOM.style.borderRadius=".5rem";


//Obtener los estilos
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS -- Custom propities CSS
const $html=document.documentElement;
const $body=document.body;

let colorDark=getComputedStyle($html).getPropertyValue("--dark-color");
let yellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

$body.style.backgroundColor=colorDark;
$body.style.color=yellowColor;
//Cambia el color
$html.style.setProperty("--dark-color","#000");
//Lo asigna a la variable
colorDark=getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color",colorDark);







