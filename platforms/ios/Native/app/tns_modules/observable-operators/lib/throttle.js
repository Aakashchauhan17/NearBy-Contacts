'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Limits the rate of events to at most one every throttlePeriod. Emits the first
 * event encountered once throttlePeriod milliseconds have passed since the last event.
 *
 * @example
 * throttle(interval(1000), 3000) // 0 ... 3 ... 6 ...
 *
 * @example
 * // limits scroll events, maybe to bookmark scroll position
 * // If available on Observable.prototype
 * scrollEvents
 *   .throttle(300)
 *
 * @param  {Observable} input           Input Observable
 * @param  {number}     throttlePeriod  Minimum number of milliseconds between events
 * @return {Observable} New Observable
 */
var throttle = function throttle(input, throttlePeriod) {
  return new input.constructor(function (observer) {
    var throttling = false;
    var timer = void 0;

    var subscription = input.subscribe({
      next: function next(value) {
        if (!throttling) {
          observer.next(value);
          throttling = true;
          timer = setTimeout(function () {
            throttling = false;
          }, throttlePeriod);
        }
      },
      error: function error(e) {
        observer.error(e);
      },
      complete: function complete() {
        observer.complete();
        clearTimeout(timer);
      }
    });

    return function () {
      subscription.unsubscribe();
      clearTimeout(timer);
    };
  });
};

throttle._name = 'throttle';

exports.default = throttle;