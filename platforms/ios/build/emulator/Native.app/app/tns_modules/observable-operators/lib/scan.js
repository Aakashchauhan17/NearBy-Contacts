'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a new observable containing incrementally accumulated values, starting with the provided
 * initial value. Similar to {@link reduce}.
 *
 * @example
 * scan(Observable.of(1, 3, 2, 5), Math.max, 0) // 1, 3, 3, 5
 *
 * @example
 * // if available on Observable.prototype
 * Observable.of(1, 2, 3).scan((acc, val) => acc + val, 0) // 1, 3, 6
 *
 * @param  {Observable} input   Input Observable
 * @param  {Function}   fn      Accumulating function
 * @param  {*}          initial Initial value
 * @return {Observable}         New Observable of accumulated values
 */
var scan = function scan(input, fn, initial) {
  var accumulation = initial;

  return (0, _transform2.default)(input, function (observer, value) {
    accumulation = fn(accumulation, value);
    observer.next(accumulation);
  });
};

scan._name = 'scan';

exports.default = scan;