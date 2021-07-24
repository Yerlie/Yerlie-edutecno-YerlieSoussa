import Impuestos from './impuestos.js'

export default class Cliente {
	#nombre
	#impuestos
	constructor(nombre) {
		this.#nombre = nombre
		this.#impuestos = new Impuestos()
	}
	getNombre() {
		return this.#nombre
	}
	setNombre(nombre) {
		this.#nombre = nombre
	}

	getImpuestos() {
		return this.#impuestos
	}

	calcularImpuesto() {
		let resultado = (this.#impuestos.getMontoBrutoAnual() - this.#impuestos.getDeducciones()) * 0.21
		return resultado
	}
}
