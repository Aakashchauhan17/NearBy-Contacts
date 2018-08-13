'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates an observable that immediately terminates with the provided error
 *
 * @example
 * error('error message').subscribe({ error: console.log }) // logs 'error message'
 *
 * @example
 * // rejecting a certain case
 * stream
 *  .filter(specificCase)
 *  .flatMap(value => Observable.error(value))
 *  .subscribe(observer)
 *
 * @param  {*}          e           Error value
 * @param  {Function}   Constructor Observable constructor
 * @return {Observable} New Observable
 */
var error = function error(e) {
  var Constructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Observable;
  return new Constructor(function (observer) {
    observer.error(e);
  });
};

error._name = 'error';

exports.default = error;