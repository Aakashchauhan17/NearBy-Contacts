'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Skips the first N values of an Observable
 *
 * @example
 * skip(observable.of(1, 2, 3, 4), 2) // 3, 4
 *
 * @example
 * // if available on Observable.prototype
 * Observable.of('a', 'b', 'c', 'd', 'e').skip(3) // d, e
 *
 * @param  {Observable} input Input Observable
 * @param  {number}     n     Number of values to skip
 * @return {Observable}       New Observable
 */
var skip = function skip(input, n) {
  var count = 0;

  return (0, _transform2.default)(input, function (observer, value) {
    count += 1;

    if (count > n) {
      observer.next(value);
    }
  });
};

skip._name = 'skip';

exports.default = skip;