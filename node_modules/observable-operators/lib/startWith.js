'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _concat = require('./concat');

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Start an observable sequence with the provided values
 *
 * @example
 * startWith(Observable.of(1, 2, 3), 0) // 0, 1, 2, 3
 *
 * @example
 * // if available on Observable.prototype
 * Observable.of(1, 2, 3)
 * .startWith(-1, 0) // -1, 0, 1, 2, 3
 *
 * @param  {Observable} input   Input Observable
 * @param  {...*}       values  Values to start with
 * @return {Observable} new Observable
 */
var startWith = function startWith(input) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return (0, _concat2.default)(Observable.from(values), input);
};

startWith._name = 'startWith';

exports.default = startWith;