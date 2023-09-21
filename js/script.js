//Objeto producto
productos = [
    {
        nombre: "Gráfica",
        precio: 289+"$",
        imagen: "img2/coche1.jpeg"
    },
    {
        nombre: "Impresora",
        precio: 149.99+"$",
        imagen: "img2/coche3.jpeg"
    },
    {
        nombre: "Fuente de alimentación",
        precio: 89.99+"$",
        //imagen: "img2/coche1.jpeg",
        video: "img2/coche4.mp4",
        duracion: 5
    }
]

NUMPRODUCTOS = productos.length;

addEventListener("DOMContentLoaded", main);

function main(){
    indice = 0;
    mostrar();

    console.log(productos);
}

function mostrar(){
    let nombre = document.getElementById("nombreProducto");
    let precio = document.getElementById("precioProducto");
    let claseImagen = document.getElementsByClassName("imagenProducto");
    let imagen = claseImagen[0].getElementsByTagName("img");
    let claseVideo = document.getElementsByClassName("videoProducto");
    let video = claseVideo[0].getElementsByTagName("video");
    let contador;

    contador = setTimeout(mostrar, 2000);

    borrarMultimedia(imagen[0], video[0]);

    if(indice == NUMPRODUCTOS){
        indice = 0;
    }

    //Bucle que recorre el producto al que pertenece el índice y lo muestra en pantalla
    for (const property in productos[indice]) {
        switch(property){
            case "nombre":
                nombre.textContent = productos[indice][property];
                break;
            case "precio":
                precio.textContent = productos[indice][property];
                break;  
        }

        //Según tenga la propiedad imagen o video muestra uno u otro
        if(property == "imagen"){
            imagen[0].src = productos[indice][property];
        }else{
            //Se vuelve a ejecutar la función una vez acaba el video
            if(property == "video"){
                clearTimeout(contador);
                video[0].src = productos[indice][property];
                let duracionVideo = parseInt(productos[indice].duracion);

                contador = setTimeout(mostrar, duracionVideo*1000);
            }
        }
        //console.log(`${property}: ${productos[indice][property]}`);
    }

    indice++;
}

function borrarMultimedia(imagen, video){
    imagen.src = "";
    video.src = "";
}

/*
    Según el tipo de archivo modificar el setTimeout para que tarde en 
    cambiar lo que dura el vídeo

    Hacer varios diseños de diapositivas distitas
    Según el horario mostrar unas cosas u otras
*/
