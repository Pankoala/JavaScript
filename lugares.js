function lugares() {
let ciudad = "Monterrey"
switch (ciudad){
    case "Ciudad de México":
    case "Guadalajara":
    case "Monterrey":
        console.log("$1600 viaje redondo")
        break;
    case "Villahermosa":
        console.log("$2,000 viaje redondo")
        break;
    case "Cancún":
        console.log("$2,500 viaje redondo")
        break;
    default:
        console.log(ciudad + " no está disponible aún.")
        break;
    }
    console.log("¡Hasta pronto!")
    
}