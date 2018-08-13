'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * "Catch" an Observable sequence by continuing with another Observable sequence
 * upon error. Takes a function as an argument that will be passed the error value
 * and must return an Observable. When assigned to a Constructor this method is called with `.catch()`
 * @example
 * catchError(
 *   new Observable(observer => observer.error('bad stuff')),
 *   e => Observable.of(`Caught error: ${e}`)
 * )
 *   .subscribe(console.log) // Caught error: bad stuff
 *
 * @example
 * // If available on Observable.prototype
 * stream
 *   .catch(e => alternateStream)
 *   .subscribe(...)
 *
 * @param  {Observable} input Input Observable.
 * @param  {Function}   fn    Catching function. Must return an Observable.
 * @return {Observable} new Observable
 */
var catchError = function catchError(input, fn) {
  return new input.constructor(function (observer) {
    var subscription = input.subscribe({
      next: function next(value) {
        observer.next(value);
      },
      error: function error(e) {
        subscription = fn(e).subscribe({
          next: function next(value) {
            observer.next(value);
          },
          error: function error(ee) {
            observer.error(ee);
          },
          complete: function complete() {
            observer.complete();
          }
        });
      },
      complete: function complete() {
        observer.complete();
      }
    });

    return function () {
      subscription.unsubscribe();
    };
  });
};

catchError._name = 'catch';

exports.default = catchError;