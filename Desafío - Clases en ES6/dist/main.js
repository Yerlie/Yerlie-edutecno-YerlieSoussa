"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.clear();
var cliente = new _cliente["default"]('jose');
console.log('nombre del cliente: ' + cliente.getNombre());
console.log('calculo impuesto1: ' + cliente.calcularImpuesto());
cliente.getImpuestos().setMontoBrutoAnual(1100);
cliente.getImpuestos().setDeducciones(100);
console.log('calculo impuesto2: ' + cliente.calcularImpuesto());