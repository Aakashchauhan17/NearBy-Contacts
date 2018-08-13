'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [Debounces](https://davidwalsh.name/javascript-debounce-function) an Observable stream
 * by a specified number of milliseconds.
 *
 * @example
 * debounce(clickEvents, 300)
 *
 * @example
 * // if available on Observable.prototype
 * clickEvents
 *   .debounce(300)
 *   .map(handler)
 *
 * @param  {Observable} input Input Observable
 * @param  {number}     ms    Milliseconds to debounce by
 * @return {Observable} Debounced Observable
 */
var debounce = function debounce(input, ms) {
  var timer = void 0;
  var emitNext = void 0;
  /*
   * Pull Observable constructor off the first input Observable. This is to ensure
   * that if myObservable.debounce(...) is called that it will return a new Observable built off
   * the same constructor as myObservable so that it has the same available methods
   */
  return new input.constructor(function (observer) {
    var subscription = input.subscribe({
      next: function next(value) {
        clearTimeout(timer);

        emitNext = function emitNext() {
          return observer.next(value);
        };

        timer = setTimeout(function () {
          emitNext();
          emitNext = undefined;
        }, ms);
      },
      error: function error(e) {
        observer.error(e);
      },
      complete: function complete() {
        clearTimeout(timer);

        if (emitNext) {
          emitNext();
        }

        observer.complete();
      }
    });

    return function () {
      clearTimeout(timer);
      subscription.unsubscribe();
    };
  });
};

debounce._name = 'debounce';

exports.default = debounce;