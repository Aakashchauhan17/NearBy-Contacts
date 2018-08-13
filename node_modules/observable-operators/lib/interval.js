'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates an observable that emits an integer count every specified
 * number of milliseconds
 *
 * @example
 * Observable.interval(1000) // 0, 1, 2, ...
 * Observable.interval(500)  // 0, 1, 2, ... but twice as fast
 *
 * @param  {number}     ms          Millisecond count interval
 * @param  {Function}   Constructor Observable constructor
 * @return {Observable} Observable stream of integers
 */
var interval = function interval(ms) {
  var Constructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Observable;
  return new Constructor(function (observer) {
    var count = 0;

    var intervalId = setInterval(function () {
      observer.next(count);
      count += 1;
    }, ms);

    return function () {
      return clearInterval(intervalId);
    };
  });
};

interval._name = 'interval';

exports.default = interval;