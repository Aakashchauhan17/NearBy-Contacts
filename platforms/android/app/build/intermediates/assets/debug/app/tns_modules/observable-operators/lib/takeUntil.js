'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Emits values from an Observable sequence until it receives a value
 * from a signal Observable. If the signal emits a value right away,
 * no values will be emitted. If the signal closes before emitting a value,
 * the input Observable will pass through unchanged. Errors from both the signal and input
 * are propagated forward. This operator is particularly useful for stream cancelation by users or
 * other processes.
 *
 * @example
 * // emits consecutive integers until the user says to shut up
 * takeUntil(Observable.interval(100), cancelEvent)
 *
 * @example
 * // using takeUtil along with flatMap to create a stream of mouse drag events
 * // if available on Observable.prototype
 * const drags = mouseDownEvents
 *   .flatMap(e => mouseMoveEvents(e).takeUntil(mouseUpEvents))
 *
 * @param  {Observable} input  Input Observable
 * @param  {Observable} signal Signal Observable
 * @return {Observable} New Observable
 */
var takeUntil = function takeUntil(input, signal) {
  return new input.constructor(function (observer) {
    var signalSubscription = signal.subscribe({
      next: function next() {
        observer.complete();
      },
      error: function error(e) {
        observer.error(e);
      }
    });

    if (observer.closed) {
      return undefined;
    }

    var inputSubscription = input.subscribe({
      next: function next(value) {
        observer.next(value);
      },
      error: function error(e) {
        observer.error(e);
      },
      complete: function complete() {
        signalSubscription.unsubscribe();
        observer.complete();
      }
    });

    return function () {
      inputSubscription.unsubscribe();
      signalSubscription.unsubscribe();
    };
  });
};

takeUntil._name = 'takeUntil';

exports.default = takeUntil;