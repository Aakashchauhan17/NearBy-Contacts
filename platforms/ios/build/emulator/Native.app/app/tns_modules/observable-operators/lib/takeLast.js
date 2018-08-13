'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Takes the last N values of an Observable
 *
 * @example
 * takeLast(observable.of(1, 2, 3, 4), 2) // 3, 4
 *
 * @example
 * // if available on Observable.prototype
 * Observable.of('a', 'b', 'c', 'd', 'e').takeLast(3) // c, d, e
 *
 * @param  {Observable} input Input Observable
 * @param  {number}     n     Number of values to take at the end
 * @return {Observable}       New Observable
 */
var takeLast = function takeLast(input, n) {
  var lastValues = [];

  return new input.constructor(function (observer) {
    return input.subscribe({
      next: function next(value) {
        if (lastValues.length < n) {
          lastValues.push(value);
        } else {
          lastValues.shift();
          lastValues.push(value);
        }
      },
      error: function error(e) {
        observer.error(e);
      },
      complete: function complete() {
        lastValues.forEach(function (value) {
          return observer.next(value);
        });
        observer.complete();
      }
    });
  });
};

takeLast._name = 'takeLast';

exports.default = takeLast;