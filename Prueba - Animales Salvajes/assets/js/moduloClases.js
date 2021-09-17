//clases de los animales
import { Media } from './moduloMedia.js'

class Animal {
	_nombre
	_edad
	_comentarios
	constructor(nombre, edad, comentarios) {
		this._nombre = nombre
		this._edad = edad
		this._comentarios = comentarios
	}
	getNombre() {
		return this._nombre
	}
	getEdad() {
		return this._edad
	}
	getComentarios() {
		return this._comentarios
	}
	//este metodo se debe implementar en la clase hijo
	async getSonido() {
		return undefined
	}
	//este metodo se debe implementar en la clase hijo
	async getImagen() {
		return undefined
	}
	async playSonido() {
		let player = document.querySelector('#player')
		player.setAttribute('src', await this.getSonido())
		player.load()
		player.play()
	}
}

class Leon extends Animal {
	async rugir() {
		await super.playSonido()
	}
	async getSonido() {
		return await Media.getSonido('Leon')
	}
	async getImagen() {
		return await Media.getImagen('Leon')
	}
}
class Lobo extends Animal {
	async aullar() {
		await super.playSonido()
	}
	async getSonido() {
		return await Media.getSonido('Lobo')
	}
	async getImagen() {
		return await Media.getImagen('Lobo')
	}
}
class Oso extends Animal {
	async gruñir() {
		await super.playSonido()
	}
	async getSonido() {
		return await Media.getSonido('Oso')
	}
	async getImagen() {
		return await Media.getImagen('Oso')
	}
}
class Serpiente extends Animal {
	async sisear() {
		await super.playSonido()
	}
	async getSonido() {
		return await Media.getSonido('Serpiente')
	}
	async getImagen() {
		return await Media.getImagen('Serpiente')
	}
}
class Aguila extends Animal {
	async chillar() {
		await super.playSonido()
	}
	async getSonido() {
		return await Media.getSonido('Aguila')
	}
	async getImagen() {
		return await Media.getImagen('Aguila')
	}
}

export { Animal, Leon, Lobo, Oso, Serpiente, Aguila }