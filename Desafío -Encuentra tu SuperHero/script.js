const token = '10159584728690238'

//Retorna verdadero si todo el string cumple la expresión regular. 
function exactMatch(regExp, str) {
	let split = str.split(regExp)
	return split.length === 2 && split[0] === split[1] && split[0] === ''
}

function validarNumero(str) {
	if (exactMatch(/[0-9]+/g, str)) {
		return parseInt(str)
	} else {
		return undefined
	}
}

function llamarApi(id) {
	$.ajax({
		url: `https://www.superheroapi.com/api.php/${token}/${id}`, 
		success: json => mostrarHeroe(json),
	})
}

function mostrarHeroe(json) {
	console.log(json)
	$('.nombre').text(json.name)
	$('#imagen').attr('src', json.image.url)
	$('#conexiones').text(json.connections['group-affiliation'])
	$('#publicado').text(json.connections.relatives)

	$('#ocupacion').text(json.work.occupation)
	$('#aparicion').text(json.biography['first-appearance'])
	$('#altura').text(json.appearance.height.join(', '))
	$('#peso').text(json.appearance.weight.join(', '))
	$('#alianzas').text(json.biography.aliases.join(', '))

	dibujaGrafico(json.powerstats,json.name)

	$('#resultado').removeClass('d-none')//d-none: display... oculta el elemento
	$('#busqueda').addClass('d-none')
}

function dibujaGrafico(datos,nombre) {
	
	let puntos = Object.entries(datos).filter(e => {
		return e[1] !== "null";
	}).map(e => {
		return { label: e[0], y: e[1] }
	})
	console.log(puntos)
	var chart = new CanvasJS.Chart('grafico', {
		animationEnabled: true,
		title: {
			text: 'Estadísticas de Poder para '+nombre,
		},
		data: [
			{
				type: 'pie',
				toolTipContent: '<b>{label}</b>: {y}%',
				showInLegend: 'true',
				legendText: '{label}',
				indexLabelFontSize: 16,
				indexLabel: '{label} - {y}%',
				dataPoints: puntos,
			},
		],
	})
	chart.render()
}

function buscarOtro() {
	$('#resultado').addClass('d-none')
	$('#busqueda').removeClass('d-none')
	$('#inputId').val('')
	$('#inputId').focus()
}

function buscarId() {
	let id = $('#inputId').val()
	id = id.trim()//trim: elimina los espacios de principio y de final. Solo deja los textos.
	id = validarNumero(id)
	if (id === undefined) {
		$('#spanMsg').text('Debe ingresar un número entero...')
	} else {
		$('#spanMsg').text('')
		llamarApi(id)
	}
}

$(document).ready(function () {
	$('#botonBuscar').click(buscarId)
	$('#botonBuscarOtro').click(buscarOtro)
})

