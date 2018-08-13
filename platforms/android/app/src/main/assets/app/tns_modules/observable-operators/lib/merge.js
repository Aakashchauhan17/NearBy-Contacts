'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Combines multiple Observables in to one by passing on each input's emissions.
 * Any error notification from an input will be passed on to the observer immediately. The
 * output stream will terminate when all inputs have terminated.
 *
 * @example
 * merge(
 *   clickEventsFromA,
 *   clickEventsFromB,
 *   clickEventsFromC
 * ).subscribe(handleEvents)
 *
 * @example
 * // if available on Observable.prototype
 * eventsEvery100ms
 *   .merge(eventsEvery10s)
 *   .forEach(console.log)
 *
 * @example
 * @param  {...Observable} inputs Input Observables
 * @return {Observable}    Single output Observable
 */
var merge = function merge() {
  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
    inputs[_key] = arguments[_key];
  }

  return (
    /*
     * Pull Observable constructor off the first input Observable. This is to ensure
     * that if myObservable.merge(...) is called that it will return a new Observable built off
     * the same constructor as myObservable so that it has the same available methods
     */
    new inputs[0].constructor(function (observer) {
      var numObservers = inputs.length;

      var subscriptions = inputs.map(function (operator) {
        return operator.subscribe({
          next: function next(value) {
            observer.next(value);
          },
          error: function error(e) {
            observer.error(e);
          },
          complete: function complete() {
            numObservers -= 1;

            if (numObservers === 0) {
              observer.complete();
            }
          }
        });
      });

      return function () {
        subscriptions.forEach(function (subscription) {
          return subscription.unsubscribe();
        });
      };
    })
  );
};

merge._name = 'merge';

exports.default = merge;