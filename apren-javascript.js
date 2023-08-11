let contador = 0;
//while
while (contador < 3) {
    console.log(contador);
    contador ++;
}

//do while
do {
    console.log(contador);
    contador ++;
} while (contador < 3);
console.log("Fin siclo while");

// suma

const suma = [5, 4, 13, 10, 9];

let sumartodo = 0;

for (let i = 0; i < suma.length; i++) {

    sumartodo = sumartodo + suma[i];

}

console.log(sumartodo);

// Metodo get en objetos
let persona = {
    nombre: "Jhon",
    apellido: "Hernandez",
    email: "jhonhernandezospino@gmail.com",
    edad: 18,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombrecompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona.nombrecompleto);
console.log(persona.lang);//Convertido
console.log(persona.idioma);
// Metodo set en objetos
persona.lang = "en";
console.log(persona.lang);
console.log(persona.idioma);//Asignado

// Constructor
function persona2(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombrecompleto = function (){
        return this.nombre + " " + this.apellido;

    }
}

let padre = new persona2("wilson", "Hernandez", "wilsonhernandez@gmail.com");
console.log(padre);

let madre = new persona2("Monica", "Ospino", "Monicaospino@gmail.com");
console.log(madre);

console.log(padre.nombrecompleto());
console.log(madre.nombrecompleto());