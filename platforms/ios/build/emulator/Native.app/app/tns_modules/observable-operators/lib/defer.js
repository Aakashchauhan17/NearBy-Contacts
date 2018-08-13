'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns an Observable from the result of a function exectuted
 * upon subscription. Handles async functions, emitting an event
 * upon resolution. Similar to {@link fromPromise} but useful for cases where
 * you don't want to do an expensive async thing until something subscribes.
 *
 * @example
 * async function makeCall() {
 *   const params = buildParams(...)
 *   const response = await fetch(params)
 *   return response.data
 * }
 * // call will not happen after this statement
 * const callResult = Observable
 *   .defer(makeCall)
 *   .map(handleResponse)
 * // but it will now
 * callResult.subscribe(...)
 *
 * @example
 * // will also work with a function that returns a promise
 * function doAsyncThing() {
 *   return new Promise(...)
 * }
 *
 * Observable.defer(doAsyncThing).subscribe(...)
 *
 * @example
 * // will also work with non-async functions
 * function doExpensiveSynchronousThing() {
 *   ...
 * }
 *
 * Observable.defer(doExpensiveSynchronousThing).subscribe(...)
 *
 * @param  {Function}   func        A function, potentially async
 * @param  {Function}   Constructor Observable constructor
 * @return {Observable} Observable
 */
var defer = function defer(func) {
  var Constructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Observable;
  return new Constructor(function (observer) {
    Promise.resolve(func()).then(function (result) {
      observer.next(result);
      observer.complete();
    }).catch(function (e) {
      observer.error(e);
    });
  });
};

defer._name = 'defer';

exports.default = defer;