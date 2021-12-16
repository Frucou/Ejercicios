
class Persona {

    constructor(nombre, edad, genero) {
        this._nombre = nombre;
        this._edad = edad;
        this._genero = genero;
    }

    obtDetalles() {
        const datos = `
        ${this._nombre}.
        ${this._edad}.
        ${this._genero}.`;

        return datos;
    }

    
}

class Estudiante extends Persona {

    constructor(nombre, edad, genero,curso) {
        super(nombre,edad,genero);
        this._curso = curso;
        this._grupo = "sin grupo";
    }

    registrar() {
        let padre = super.obtDetalles();
        return `${padre}
        ${this._curso}.
        ${this._grupo}.
        `;
    }
}

class Profesor extends Persona {

    constructor(nombre, edad, genero) {
        super(nombre, edad, genero);
        this._asignatura = "no especificado";
        this._nivel = "sin nivel";
    }

    asignar() {
        let padre = super.obtDetalles();
        return `${padre}
        ${this._asignatura}.
        ${this._nivel}.`;
    }
}



export { Persona, Estudiante, Profesor };