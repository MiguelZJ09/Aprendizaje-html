function redireccion(){
      if(confirm('¿Estas seguro de pasar a la siguiente página?')){
        window.open("https://www.gamestorrents.fm/home/")
      }else {
        alert("Continuaras Aqui!!!!!!...")
      }
}

//Esta funcion es para mostrar el card de la izquierda
function mostrar_card_izquierda(){
let card1 = document.getElementById("item1")
card1.style.display = "block"
}
//Esta funcion es para mostar el card de la derecha
function mostrar_card_derecha(){
    let card2 = document.getElementById("item2")
card2.style.display = "block"
}
//Esta funcion es para cerrar el card de la izquierda
function cerrar_card(){
let card1 = document.getElementById("item1")
card1.style.display = "none"
}
//Esta funcion es para cerrar el card de la derecha
function cerrar_card2(){
let card2 = document.getElementById("item2")
card2.style.display = "none"
}