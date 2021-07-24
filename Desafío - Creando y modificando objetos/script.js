//CLASE Consultorio

function Consultorio(nombre) {
	this.nombre = nombre
	this.pacientes = []

	this.setNombre = function (nombre) {
		this.nombre = nombre
	}
	this.getNombre = function () {
		return nombre
	}

	this.agregarPaciente = function (paciente) {
		this.pacientes.push(paciente)
	}
}

//funciones prototype de Consultorio

Consultorio.prototype.mostrarTodo = function () {
	console.log('TODOS LOS PACIENTES:')
	this.pacientes.forEach(p => {
		console.log(JSON.stringify(p))
	})
	console.log()
}

Consultorio.prototype.buscar = function (txt) {
	return this.pacientes.find(p => {
		return p.nombre.toLowerCase().indexOf(txt.toLowerCase()) > -1
	})
}

//CLASE Paciente

function Paciente(nombre, edad, rut, diagnostico) {
	this.nombre = nombre
	this.edad = edad
	this.rut = rut
	this.diagnostico = diagnostico

	this.setNombre = function (nombre) {
		this.nombre = nombre
	}

	this.setEdad = function (edad) {
		this.edad
	}

	this.setRut = function (rut) {
		this.rut
	}

	this.setDiagnostico = function (diagnostico) {
		this.diagnostico = diagnostico
	}

	this.getNombre = function () {
		return nombre
	}

	this.getEdad = function () {
		return edad
	}

	this.getRut = function () {
		return rut
	}

	this.getDiagnostico = function () {
		return diagnostico
	}
}

//Programa

let consultorio = new Consultorio('Santa Marta')
consultorio.agregarPaciente(new Paciente('José Pérez', 42, '1111111-1', 'Demencia Senil'))
consultorio.agregarPaciente(new Paciente('Juan Vidal', 72, '2222222-2', 'Alzheimer'))
consultorio.agregarPaciente(new Paciente('Andrea Toro', 33, '3333333-3', 'Sida'))
consultorio.agregarPaciente(new Paciente('Maria Sandoval', 44,'4444444-k', 'Dolor de espalda'))

consultorio.mostrarTodo()
document.querySelector('button').addEventListener('click', () => {
	let input = document.querySelector('input')
	let pacienteEncontrado = consultorio.buscar(input.value.trim())
	if (pacienteEncontrado === undefined) {
		console.error('No se encontró el paciente')
	} else {
		console.log('Paciente encontrado:')
		console.log(JSON.stringify(pacienteEncontrado))
		console.log()
	}
	input.value = ''
	input.focus()
})
