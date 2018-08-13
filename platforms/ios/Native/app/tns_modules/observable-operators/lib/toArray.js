'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a promise resolving to an array representation of an input Observable
 * upon completion.
 *
 * @example
 * toArray(Observable.of(1, 3, 2)) // [1, 3, 2]
 *
 * @example
 * // if available on Observable.prototype
 * Observable.of(2, 3, 4).toArray() // [2, 3, 4]
 *
 * @param  {Observable} input Input Observable
 * @return {Promise}          Promise resolving to an array upon completion
 */
var toArray = function toArray(input) {
  return (0, _reduce2.default)(input, function (array, value) {
    return array.concat(value);
  }, []);
};

toArray._name = 'toArray';

exports.default = toArray;