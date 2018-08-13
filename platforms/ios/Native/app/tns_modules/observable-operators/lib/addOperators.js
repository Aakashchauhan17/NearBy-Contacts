"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Adds an array of operators to the specified target object, modifying each
 * so that `this` is passed in as the first argument.
 *
 * @example
 * // a common thing you might want to do so that you can call observable.map(...).filter(...)
 * addOperators(Observable.prototype, [filter, map, scan])
 *
 * @example
 * // if you don't want to modify all Observables
 * addOperators(myCustomObservable, [reduce, take])
 *
 * @param {Object}          target    Target Object
 * @param {Array<Function>} operators Array of Operators to add
 */
var addOperators = function addOperators(target, operators) {
  operators.forEach(function (operator) {
    Object.defineProperty(target, operator._name, {
      value: function value() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return operator.apply(undefined, [this].concat(_toConsumableArray(args)));
      },

      writable: true,
      enumerable: false,
      configurable: true
    });
  });
};

exports.default = addOperators;