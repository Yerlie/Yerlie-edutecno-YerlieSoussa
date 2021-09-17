/**
 * Media retorna funciones para obtener la imagen y el sonido
 * de un animal usando una funcion autoejecutable IIFE y async / await.
 */
let Media = (() => {
	//funcion privada
	let funcionPrivada = async animal => {
		const response = await fetch('./animales.json')
		const data = await response.json()
		const mapa = data.animales.reduce(function (map, obj) {
			map[obj.name] = {
				imagen: 'assets/imgs/' + obj.imagen,
				sonido: 'assets/sounds/' + obj.sonido,
			}
			return map
		}, {})
		return mapa[animal]
	}
	//funcion publica
	let getSonido = async animal => {
		let result = await funcionPrivada(animal)
		return result === undefined ? undefined : result.sonido
	}
	//funcion publica
	let getImagen = async animal => {
		let result = await funcionPrivada(animal)
		return result === undefined ? undefined : result.imagen
	}
	return { getSonido, getImagen }
})()

export { Media }
