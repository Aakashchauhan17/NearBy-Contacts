'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Subscribes to an input Observable but does not emit values until it receives a value
 * from a signal observable. Emits an empty Observable if the signal terminates without
 * emitting a value. Propagates errors from both input and signal.
 *
 * @example
 * // emits consecutive integers until after the user says they care
 * skipUntil(Observable.interval(100), startEvent)
 *
 * @example
 * // if available on Observable.prototype
 * socketEvents
 *   .skipUntil(startListening)
 *
 * @param  {Observable} input  Input Observable
 * @param  {Observable} signal Signal Observable
 * @return {Observable} New Observable
 */
var skipUntil = function skipUntil(input, signal) {
  return new input.constructor(function (observer) {
    var block = true;

    var signalSubscription = signal.subscribe({
      next: function next() {
        block = false;
        signalSubscription.unsubscribe();
      },
      error: function error(e) {
        observer.error(e);
      },
      complete: function complete() {
        // If still blocked, there was never a signal so complete
        if (block) {
          observer.complete();
        }
      }
    });

    // If complete already don't do the rest of this code
    if (observer.closed) {
      return undefined;
    }

    var inputSubscription = input.subscribe({
      next: function next(value) {
        if (!block) {
          observer.next(value);
        }
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

skipUntil._name = 'skipUntil';

exports.default = skipUntil;