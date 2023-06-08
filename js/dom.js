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


//console.log($linkDOM.style);
//console.log($linkDOM.getAttribute("style"));
//console.log($linkDOM.style.backgroundColor);
//console.log($linkDOM.style.color);
//console.log(window.getComputedStyle($linkDOM));
//console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

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
//console.log($linkDOM.style);
//console.log($linkDOM.getAttribute("style"));
//console.log(getComputedStyle($linkDOM));

//Variables CSS -- Custom propities CSS
const $html=document.documentElement;
const $body=document.body;

let colorDark=getComputedStyle($html).getPropertyValue("--dark-color");
let yellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");

$body.style.backgroundColor=colorDark;
$body.style.color=yellowColor;
//Cambia el color
$html.style.setProperty("--dark-color","white");
$html.style.setProperty("--yellow-color","#000");
//Lo asigna a la variable
colorDark=getComputedStyle($html).getPropertyValue("--dark-color");
yellowColor=getComputedStyle($html).getPropertyValue("--yellow-color");
$body.style.setProperty("color",yellowColor);
$body.style.setProperty("background-color",colorDark);

const $card=document.querySelector(".card");
//console.log($card);
//console.log($card.className);
//console.log($card.classList);
//ver si contiene el style css
//console.log($card.classList.contains("rotate-45"));
//agregar el stylo
$card.classList.add("rotate-45");
//console.log($card.classList.contains("rotate-45"));//tru
//remover
$card.classList.remove("rotate-45");
//console.log($card.classList.contains("rotate-45"));//false
//toggle si no lo tiene lo agrega
$card.classList.toggle("rotate-45");
//console.log($card.classList.contains("rotate-45"));//true
//si lo tiene se lo quita
$card.classList.toggle("rotate-45");
//console.log($card.classList.contains("rotate-45"));//false
//toggle si no lo tiene lo agrega
$card.classList.toggle("rotate-45");
//Remplazar una clase por otras
$card.classList.replace("rotate-45","rotate-135");
//Todos estos metodos se pueden agregar a multiples clases
$card.classList.add("sepia","opacity-80");
$card.classList.remove("sepia","rotate-135");
$card.classList.toggle("rotate-45");

//------------------------------------Insertar o remplazar texto en html------------------------------
const $queEs=document.getElementById("que-es");

let nuevoText =`
<p>
    El Modelo de Objetos del Documento <b><i>(DOM)</i></b> es una interfaz de programación de aplicaciones (API) para 
    documentos validos HTML y bien construidos XML. 
</p>
<p>
    Define la estructura lógica de los documentos y el modo en que se accede y manipula. En la especificación 
    DOM, el término "documento" es utilizado en un sentido amplio - the term "document" is used in the broad 
    sense - cada vez más XML es utilizado como un medio de representar muchas clases diferentes de información
    que puede ser almacenada en sistemas diversos, y mucha de esta información se vería, en términos tradicionales, más como datos que como documentos.
</p>
<p>
<mark>El DOM no es una parte de la especificación de javaScript, es una API para los navegadores.</mark>
</p>
`;

//Este no esta estandarizado con todos los navegadoires
//$queEs.innerText=nuevoText
//Insertar texto estandarizado con los navegadores
//$queEs.textContent=nuevoText;
//Inserta respetando las etiquetas html pero las encima por asi decirlo
//$queEs.innerHTML=nuevoText;
//Agrega las etiquetas correctamente pero quita el id seleccionado
$queEs.outerHTML=nuevoText;


/*---------------------------------------Recorrer el DOM en metodo de elementos

const $cards=document.querySelector(".cards");
console.log($cards);
console.log($cards.children);
console.log($cards.children[1]);
//Imprime el padre
console.log($cards.parentElement);
//Imprime el primerHijo
console.log($cards.firstElementChild);
//Imprime el ultimo elemento
console.log($cards.lastElementChild);
//Imprime el elemento cercano anterior
console.log($cards.previousElementSibling);
//Imprime el elemento mas cercano siguiente
console.log($cards.nextElementSibling);

console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[2].closest("section"));
*/

//-------------------------------------------------CREAR ELEMENTOS Y FRAGMENTOS-----------------------------
//Forma numero 1
const $cards=document.querySelector(".cards");
const $figure=document.createElement("figure"),
    $img=document.createElement("img"),
    $figcaption=document.createElement("figcaption");
    $figcapText=document.createTextNode("Art");

    $img.setAttribute("src","https://placeimg.com/200/200/tech");
    $img.setAttribute("alt","Art");
    $figcaption.appendChild($figcapText);

    $figure.appendChild($img);
    $figure.appendChild($figcaption);
    $figure.classList.add("card");
    $cards.appendChild($figure);

//SEGUNDA FORMA
const $figure2=document.createElement("figure");

$figure2.innerHTML=`
    <img src="https://placeimg.com/200/200/electric" alt="Electric">
    <figcaption>Electric</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

//TERCERA FORMA
const estaciones=["Otoño","Primavera","Invierno","Verano"],
$ul=document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $ul.appendChild($li);
});


//CUARTA FORMA
const continentes=["America","Africa","Europa","Asia","Oceania"],
    $ul2=document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML="";
continentes.forEach(el=> $ul2.innerHTML+=(`<li>${el}</li>`));

//QUINTA FORMA Y LA MAS RECOMENDADA //  FRAGMENTACIÓN 

const meses=[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
$ul3=document.createElement("li"),
$fragmento=document.createDocumentFragment();

meses.forEach((el)=>{
    const $li=document.createElement("li");
    $li.textContent=el;
    $fragmento.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragmento);
document.body.appendChild($ul3);

const $templete=document.getElementById("templete-card").content,
$fragmento2=document.createDocumentFragment();
cardContent=[
    {
        title:"Tecnologia",
        img:"https://placeimg.com/200/200/tech",
    },
    {
        title:"Arte",
        img:"https://placeimg.com/200/200/art",
    },
    {
        title:"Soccer",
        img:"https://placeimg.com/200/200/soccer",
    },
    {
        title:"NBA",
        img:"https://placeimg.com/200/200/nba",
    }
];

cardContent.forEach(el=>{
    $templete.querySelector("img").setAttribute("src",el.img);
    $templete.querySelector("img").setAttribute("alt",el.title);
    $templete.querySelector("figcaption").textContent=el.title;

    //clonar todo un nodo o elemento
    let $clone=document.importNode($templete,true);
    $fragmento2.appendChild($clone);
});

$cards.appendChild($fragmento2);













    






