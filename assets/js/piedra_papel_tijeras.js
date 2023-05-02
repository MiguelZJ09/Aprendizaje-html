function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
       resultado = "Piedra"
    } else if(jugada == 2){
       resultado = "Papel"
    } else if(jugada == 3){
       resultado = "Tijeras"
    } else{
        resultado = "Elegiste Mal"
    }
    return resultado
}
let jugador = 0
let pc = 0
let victorias = 0
let derrotas = 0

while(victorias < 3 && derrotas < 3){

    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 Para Piedra, 2 Para Papel o 3 Para Tijeras")

    alert("PC Eligio " + eleccion(pc))
    alert("Elegiste " + eleccion(jugador))

if(pc == jugador){
    alert("EMPATE")
}else if(jugador == 1 && pc == 3){
    alert("GANASTE")
    victorias = victorias + 1                        
}else if (jugador == 2 && pc == 1){
    alert("GANASTE")
    victorias = victorias + 1 
}else if (jugador == 3 && pc == 2){
    alert("GANASTE")
    victorias = victorias + 1 
} else{
    alert("PERDISTE")
    derrotas = derrotas + 1 
 } 
}
alert("Ganaste " + victorias + " veces, Perdiste " + derrotas + " veces")