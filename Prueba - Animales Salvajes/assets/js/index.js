import { Leon, Lobo, Oso, Serpiente, Aguila } from './moduloClases.js'

async function agregarAnimal() {
	let animal = document.querySelector('#animal').value
	let edad = document.querySelector('#edad').value
	let comentarios = document.querySelector('#comentarios').value.trim()
	if (animal === '') {
		alert('Debes seleccionar un animal')
		document.querySelector('#animal').focus()
		return
	} else if (edad === '') {
		alert('Debes seleccionar la edad')
		document.querySelector('#edad').focus()
		return
	} else if (comentarios === '') {
		alert('Debes ingresar algun comentario')
		document.querySelector('#comentarios').focus()
		return
	}
	let nuevoAnimal
	if (animal === 'Leon') {
		nuevoAnimal = new Leon(animal, edad, comentarios)
	} else if (animal === 'Lobo') {
		nuevoAnimal = new Lobo(animal, edad, comentarios)
	} else if (animal === 'Oso') {
		nuevoAnimal = new Oso(animal, edad, comentarios)
	} else if (animal === 'Serpiente') {
		nuevoAnimal = new Serpiente(animal, edad, comentarios)
	} else if (animal === 'Aguila') {
		nuevoAnimal = new Aguila(animal, edad, comentarios)
	}
	document.querySelector('#animal').value = ''
	document.querySelector('#edad').value = ''
	document.querySelector('#comentarios').value = ''
	document.querySelector('#preview').innerHTML = ''
	document.querySelector('#animal').focus()

	let animalesDiv = document.querySelector('#Animales')
	let imagen = await nuevoAnimal.getImagen()
	animalesDiv.innerHTML = animalesDiv.innerHTML + `<div class='card col-3 p-2 m-2'><img onclick='setModalHtml("${imagen}","${nuevoAnimal.getEdad()}","${nuevoAnimal.getComentarios()}")' data-toggle="modal" data-target="#modal" class='w-100' src='${imagen}'><button class='p-1 bg-secondary center'><img onclick='window.playSonido("${await nuevoAnimal.getSonido()}")' src='assets/imgs/audio.svg' class='w-25'></button></div>`
}

async function cambiarAnimal() {
	let animal = document.querySelector('#animal').value
	let nuevoAnimal = undefined
	if (animal === 'Leon') {
		nuevoAnimal = new Leon(animal, edad, comentarios)
		nuevoAnimal.rugir()
	} else if (animal === 'Lobo') {
		nuevoAnimal = new Lobo(animal, edad, comentarios)
		nuevoAnimal.aullar()
	} else if (animal === 'Oso') {
		nuevoAnimal = new Oso(animal, edad, comentarios)
		nuevoAnimal.gruñir()
	} else if (animal === 'Serpiente') {
		nuevoAnimal = new Serpiente(animal, edad, comentarios)
		nuevoAnimal.sisear()
	} else if (animal === 'Aguila') {
		nuevoAnimal = new Aguila(animal, edad, comentarios)
		nuevoAnimal.chillar()
	}
	if (nuevoAnimal !== undefined) {
		let imagen = await nuevoAnimal.getImagen()
		document.querySelector('#preview').innerHTML = `<img src='${imagen}' class='w-100 align-middle'>`
	} else {
		document.querySelector('#preview').innerHTML = ''
	}
}

document.querySelector('#btnRegistrar').addEventListener('click', agregarAnimal)
document.querySelector('#animal').addEventListener('change', cambiarAnimal)
