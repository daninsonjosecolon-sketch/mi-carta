const mensaje = `Hola, mi amor ❤️

Solo quería decirte que eres una persona muy especial para mí.

Gracias por existir y por regalarme tantos momentos bonitos.

Te amo muchísimo. ❤️`;

let i = 0;

function escribir(){
    if(i < mensaje.length){
        document.getElementById("texto").innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribir,40);
    }
}

function mostrarMensaje(){
    document.getElementById("texto").innerHTML="";
    i=0;
    escribir();
}