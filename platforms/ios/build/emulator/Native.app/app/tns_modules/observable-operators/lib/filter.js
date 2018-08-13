'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a new Observable that emits only the values of the input Observable for which
 * a provided function returns truthy.
 *
 * @example
 * filter(Observable.of(1, 2, 3, 4), value ==> value % 2) // 2, 4
 *
 * @example
 * // If available on Observable.prototype
 * Observable.of(1, 2, 3, 4).filter(value => value % 2 === 1) // 1, 3
 *
 * @param  {Observable} input Input Observable
 * @param  {Function}   fn    Filtering function
 * @return {Observable}       New filtered Observable
 */
var filter = function filter(input, fn) {
  return (0, _transform2.default)(input, function (observer, value) {
    if (fn(value)) {
      observer.next(value);
    }
  });
};

filter._name = 'filter';

exports.default = filter;