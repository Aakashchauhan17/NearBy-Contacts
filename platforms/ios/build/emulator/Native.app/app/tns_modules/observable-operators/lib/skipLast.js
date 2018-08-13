'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Leaves off the last N values of an Observable
 *
 * @example
 * skipLast(observable.of(1, 2, 3, 4), 2) // 1, 2
 *
 * @example
 * // if available on Observable.prototype
 * Observable.of('a', 'b', 'c', 'd', 'e').skipLast(3) // a, b
 *
 * @param  {Observable} input Input Observable
 * @param  {number}     n     Number of values to leave off the end
 * @return {Observable}       New Observable
 */
var skipLast = function skipLast(input, n) {
  var values = [];

  return new input.constructor(function (observer) {
    return input.subscribe({
      next: function next(value) {
        values.push(value);
      },
      error: function error(e) {
        observer.error(e);
      },
      complete: function complete() {
        values.slice(0, values.length - n).forEach(function (value) {
          return observer.next(value);
        });
        observer.complete();
      }
    });
  });
};

skipLast._name = 'skipLast';

exports.default = skipLast;