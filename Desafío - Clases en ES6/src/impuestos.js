export default class Impuestos {
	#montoBrutoAnual
	#deducciones
	constructor() {
		this.#montoBrutoAnual = 0
		this.#deducciones = 0
	}

	getMontoBrutoAnual() {
		return this.#montoBrutoAnual
	}
	setMontoBrutoAnual(montoBrutoAnual) {
		this.#montoBrutoAnual = montoBrutoAnual
	}
	getDeducciones() {
		return this.#deducciones
	}
	setDeducciones(deducciones) {
		this.#deducciones = deducciones
	}
}
