function nombre(){
const nombre = prompt ("Por favor, escribe tu nombre.");
let nuevonombre = '';
let counta = 0;
let counte = 0;
let counti = 0;
let counto = 0;
let countu = 0;

for (let i = 0; i < nombre.length; i++) {
    switch (nombre[i]) {
        case 'a':
            nuevonombre +=1;
            counta++;
            break;
        case 'e':
            nuevonombre +=2;
            counte++;
            break;
        case 'i':
            nuevonombre +=3;
            counti++;
            break;
        case 'o':
            nuevonombre +=4;
            counto++;
            break;
        case 'u':
            nuevonombre +=5;
            countu++;
            break;
        default:
            nuevonombre += nombre[i]
  } 
}
console.log(nuevonombre)
if (counta > 0) {
    console.log("La vocal a se reemplazó " + counta + " veces")
}
if (counte > 0) {
    console.log("La vocal e se reemplazó " + counte + " veces")
}
if (counti > 0) {
    console.log("La vocal i se reemplazó " + counti + " veces")
}
if (counto > 0) {
    console.log("La vocal o se reemplazó " + counto + " veces")
}
if (countu > 0) {
    console.log("La vocal u se reemplazó " + countu + " veces")
}

console.log("¡Hasta pronto!")
}