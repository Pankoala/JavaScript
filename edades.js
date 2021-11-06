function edades() {
let edad = 35;

if (edad > 18 && edad < 30) {
    console.log("Puedes Votar")
}
else if (edad > 30 && edad < 50) {
    console.log("¡Felicidades! Puedes pasar a Votar")
}
else if (edad > 50) {
    console.log("Por favor, pase a la casilla 5")
}
else if (edad < 18){
    console.log("Aún no puedes votar.")
}
console.log("¡Hasta Luego!")
}