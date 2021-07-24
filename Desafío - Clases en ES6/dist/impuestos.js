"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _montoBrutoAnual = /*#__PURE__*/new WeakMap();

var _deducciones = /*#__PURE__*/new WeakMap();

var Impuestos = /*#__PURE__*/function () {
  function Impuestos() {
    _classCallCheck(this, Impuestos);

    _montoBrutoAnual.set(this, {
      writable: true,
      value: void 0
    });

    _deducciones.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _montoBrutoAnual, 0);

    _classPrivateFieldSet(this, _deducciones, 0);
  }

  _createClass(Impuestos, [{
    key: "getMontoBrutoAnual",
    value: function getMontoBrutoAnual() {
      return _classPrivateFieldGet(this, _montoBrutoAnual);
    }
  }, {
    key: "setMontoBrutoAnual",
    value: function setMontoBrutoAnual(montoBrutoAnual) {
      _classPrivateFieldSet(this, _montoBrutoAnual, montoBrutoAnual);
    }
  }, {
    key: "getDeducciones",
    value: function getDeducciones() {
      return _classPrivateFieldGet(this, _deducciones);
    }
  }, {
    key: "setDeducciones",
    value: function setDeducciones(deducciones) {
      _classPrivateFieldSet(this, _deducciones, deducciones);
    }
  }]);

  return Impuestos;
}();

exports["default"] = Impuestos;