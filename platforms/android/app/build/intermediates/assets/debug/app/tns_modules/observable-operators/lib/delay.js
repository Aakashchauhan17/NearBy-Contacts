'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Delay stream events by the specified number of milliseconds. Maintains
 * the relative spacing of events.
 *
 * @param  {Observable} input Input Observable
 * @param  {number}     ms    Delay time in milliseconds
 * @return {Observable} New Observable
 */
var delay = function delay(input, ms) {
  return new input.constructor(function (observer) {
    var timers = new Set();

    var subscription = input.subscribe({
      next: function next(value) {
        var timer = setTimeout(function () {
          observer.next(value);
          timers.delete(timer);
        }, ms);
        timers.add(timer);
      },
      error: function error(e) {
        observer.error(e);
      },
      complete: function complete() {
        timers.add(setTimeout(function () {
          return observer.complete();
        }, ms));
      }
    });

    return function () {
      timers.forEach(clearTimeout);
      subscription.unsubscribe();
    };
  });
};

delay._name = 'delay';

exports.default = delay;