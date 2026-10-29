
const mensaje = `Mi amor, preciosa de mi vida, esta nota que hoy escribo es para recordarte lo mucho que te amo y lo feliz que me siento de tenerte a mi lado.

Nunca dudes de la gran mujer que eres y que siempre vas a tener a un hombre que va a estar muy orgulloso de ti, uno que se alegra por tus triunfos tanto como si fueran de él, y que si algún día te sientes triste va a estar ahí para acompañarte y brindarte su apoyo.

Te amo, mi preciosa. Espero tengas un maravilloso día. ❤️`;


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
