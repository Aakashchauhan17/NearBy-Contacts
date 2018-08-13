'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a new Observable that emits the result of a provided function applied to each
 * value received from an input observable.
 *
 * @example
 * map(Observable.of(1, 2, 3), val => val + 1) // 2, 3, 4
 *
 * @example
 * // if available on Observable.prototype
 * Observable.of(1, 2, 3).map(val => `${val} mississippi`)
 *
 * @param  {Observable} input Input Observable
 * @param  {Function}   fn    Mapping function
 * @return {Observable}       New observable with mapped values
 */
var map = function map(input, fn) {
  return (0, _transform2.default)(input, function (observer, value) {
    return observer.next(fn(value));
  });
};

map._name = 'map';

exports.default = map;