class Persona {
    constructor (idPersona, nombre, apellido, edad){
        this._idPersona = idPersona++
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad
    }

    get idPersona () {
        return this._idPersona
    }

    get nombre () {
        return this._nombre
    }

    set nombre (nombre) {
        this._nombre = nombre
    }

    get apellido () {
        return this._apellido
    }

    set apellido (apellido) {
        this._apellido = apellido
    }

    get edad () {
        return this._edad 
    }

    set edad (edad) {
        this._edad = edad
    }

    datosCliente () {
        return this._nombre+' '+this._apellido+' '+this._edad
    }

    toString() {
        return this.datosCliente()
    }
}

class Empleado extends Persona {
    constructor(idEmpleado, nombre, apellido, sueldo) {
        super(nombre, apellido)

        this._idEmpleado = idEmpleado++
        this._sueldo = sueldo
    }

    get idEmpleado () {
        return this._idEmpleado
    }

    get sueldo () {
        return this._sueldo
    }

    set sueldo (sueldo) {
        this._sueldo = sueldo
    }

    datosEmpleado() {
        return this._idEmpleado+' '+this._nombre+' '+this._sueldo
    }
    
    toString() {
        return this.datosEmpleado()
    }
    
}

let persona1 = new Persona( 1,'Jhon', 'Hernandez', '18')
let empleado1 = new Empleado( 1, 'Jerson', 'Silva')

console.log(persona1)
console.log(persona1.datosCliente)
console.log(persona1.toString())
console.log(empleado1.toString())