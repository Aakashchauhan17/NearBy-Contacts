"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Adds an array of methods to the specified target Constructor, passing in the
 * Constructor itself as the last argument to each.
 * @example
 * // adding creators to Observable so you can call Observable.fromPromise(), etc
 * addCreators(Observable, [fromEvent, fromPromise])
 *
 * @param {Constructor}          target   Target Object
 * @param {Array<Function>} creators Array of functions
 */

var addCreators = function addCreators(Constructor, creators) {
  return creators.forEach(function (creator) {
    Object.defineProperty(Constructor, creator._name, {
      value: function value() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return creator.apply(undefined, _toConsumableArray(args.concat(Constructor)));
      },
      writable: true,
      enumerable: false,
      configurable: true
    });
  });
};

exports.default = addCreators;