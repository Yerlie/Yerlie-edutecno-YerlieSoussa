var cantidad = parseInt( prompt("Cuantas veces quieres jugar? "));
var num = 0;
var puntosJugador=0;
var puntosComputador=0;
while (num < cantidad) {
  alert("Jugada" + (num + 1));
  var respuesta = parseInt (prompt("Seleccione 1= tijera, 2= papel, 3 = piedra."));
  var respuestaComputador= Math.floor(Math.random()*3)+1;
  var resultado=2;     //0 gana jugador. 1 gana computador. 2 empate. 


  switch (respuesta) { 
    case 1:
        if (respuestaComputador===2){
            resultado=0;
                }
        if (respuestaComputador===3) {
            resultado=1;
        }
    break;
    case 2:
        if (respuestaComputador===3){
            resultado=0;
                }
        if (respuestaComputador===1) {
            resultado=1;
        }
    break;
    case 3:
        if (respuestaComputador===1){
            resultado=0;
                }
        if (respuestaComputador===2) {
            resultado=1;
        }
    break;
   
    }

    if (resultado===0) {
        alert('Felicitaciones!! Has ganado la jugada. ' + respuesta +' '+ respuestaComputador)
        
        puntosJugador ++;

    }
    if (resultado===1) {
        alert('Qué pena! Has perdido... ' + respuesta +' '+ respuestaComputador)
        puntosComputador ++;
    }
    if (resultado===2) {
        alert('Empate ' + respuesta +' '+ respuestaComputador)
    }
  
  num++;

}

if (puntosJugador>puntosComputador) {
    alert('Has ganado')
}
if (puntosJugador<puntosComputador) {
    alert('Has perdido')
}
if (puntosJugador===puntosComputador) {
    alert('Has empatado')
}