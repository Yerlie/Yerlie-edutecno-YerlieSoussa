class Propietario {
	constructor(nombre, direccion, telefono) {
		this.nombre = nombre
		this.direccion = direccion
		this.telefono = telefono
	}

	datosPropietario() {
		return `El nombre del dueño es: ${this.nombre}. El domicilio es ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`
	}
}

class Animal extends Propietario {
	constructor(nombre, direccion, telefono, tipo) {
		super(nombre, direccion, telefono)
		this.tipo = tipo
	}

	getTipo() {
		return this.tipo
	}
}

class Mascota extends Animal {
	constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedadMascota) {
		super(nombre, direccion, telefono, tipo)
		this._nombre = nombreMascota
		this._enfermedad = enfermedadMascota
	}

	getNombreMascota() {
		return this._nombre
	}

	setNombreMascota(nombreMascota) {
		this._nombre = nombreMascota
	}

	getEnfermedadMascota() {
		return this._enfermedad
	}

	setEnfermedadMascota(enfermedadMascota) {
		this._enfermedad = enfermedadMascota
	}

	datosMascota() {
		return `El tipo de animal es un: ${this.tipo}. Mientras que el nombre de la mascota es: ${this._nombre}, y la enfermedade es: ${this._enfermedad}`
	}
}

class Perro extends Mascota {
	constructor(nombre, direccion, telefono, nombreMascota, enfermedadMascota) {
		super(nombre, direccion, telefono, 'perro', nombreMascota, enfermedadMascota)
	}
}
class Gato extends Mascota {
	constructor(nombre, direccion, telefono, nombreMascota, enfermedadMascota) {
		super(nombre, direccion, telefono, 'gato', nombreMascota, enfermedadMascota)
	}
}
class Conejo extends Mascota {
	constructor(nombre, direccion, telefono, nombreMascota, enfermedadMascota) {
		super(nombre, direccion, telefono, 'conejo', nombreMascota, enfermedadMascota)
	}
}

document.querySelector('button').addEventListener('click', agregar)

function agregar(evt) {
	let propietario = document.querySelector('#propietario').value
	let telefono = document.querySelector('#telefono').value
	let direccion = document.querySelector('#direccion').value
	let nombreMascota = document.querySelector('#nombreMascota').value
	let tipo = document.querySelector('#tipo').value
	let enfermedad = document.querySelector('#enfermedad').value
	let mascota
	if (tipo === 'perro') {
		mascota = new Perro(propietario, direccion, telefono, nombreMascota, enfermedad)
	} else if (tipo === 'gato') {
		mascota = new Gato(propietario, direccion, telefono, nombreMascota, enfermedad)
	} else if (tipo === 'conejo') {
		mascota = new Conejo(propietario, direccion, telefono, nombreMascota, enfermedad)
	}
	document.querySelector('#resultado').innerHTML = `<ul>${mascota.datosPropietario()}</ul>
	<ul>${mascota.datosMascota()}</ul>`
	evt.preventDefault()
}
