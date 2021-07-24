import Cliente from './cliente.js'

console.clear()
let cliente = new Cliente('jose')
console.log('nombre del cliente: ' + cliente.getNombre())
console.log('calculo impuesto1: ' + cliente.calcularImpuesto())
cliente.getImpuestos().setMontoBrutoAnual(1100)
cliente.getImpuestos().setDeducciones(100)
console.log('calculo impuesto2: ' + cliente.calcularImpuesto())
