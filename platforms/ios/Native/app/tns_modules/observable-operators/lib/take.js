'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Emits the first N values of an input Observable
 *
 * @example
 * take(observable.of(1, 2, 3, 4), 2) // 1, 2
 *
 * @example
 * // if available on Observable.prototype
 * Observable.of('a', 'b', 'c', 'd', 'e').take(3) // a, b, c
 *
 * @param  {Observable} input Input Observable
 * @param  {number}     n     Number of values to take
 * @return {Observable}       New Observable
 */
var take = function take(input, n) {
  if (n < 1) {
    return input.constructor.of();
  }

  var count = 0;

  return (0, _transform2.default)(input, function (observer, value) {
    count += 1;
    observer.next(value);

    if (count >= n) {
      observer.complete();
    }
  });
};

take._name = 'take';

exports.default = take;