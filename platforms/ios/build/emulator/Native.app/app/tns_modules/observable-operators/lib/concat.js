'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Recursive inner method to subscribe to the next source on completion of the previous.
 * The recursive call means that the maximum number of streams we can concat is equal to
 * the recursion limit. This is not ideal, I'd love to think of another way to do this,
 * even if it's unlikely that someone wants to concat that many streams
 */
var subscribe = function subscribe(sources, observer, onSubscribe) {
  return onSubscribe(sources[0].subscribe({
    next: function next(value) {
      observer.next(value);
    },
    error: function error(e) {
      observer.error(e);
    },
    complete: function complete() {
      if (sources.length > 1) {
        subscribe(sources.slice(1), observer, onSubscribe);
      } else {
        observer.complete();
      }
    }
  }));
};

/**
 * Subscribe to a list of Observables in order. As one completes, the next is subscribed.
 *
 * @example
 * concat(
 *   Observable.of(1, 2, 3),
 *   Observable.of(4, 5, 6),
 *   Observable.of(7, 8, 9)
 * ) // 1, 2, 3, 4, 5, 6, 7, 8, 9
 *
 * @example
 * // if available on Observable.prototype
 * firstStream
 *  .concat(nextStream)
 *  .subscribe(handle)
 *
 * @param  {...Observable} sources List of Observables
 * @return {Observable}    new Observable with concated values
 */
var concat = function concat() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return new sources[0].constructor(function (observer) {
    var subscription = void 0;
    var onSubscribe = function onSubscribe(newSubscription) {
      subscription = newSubscription;
    };

    subscribe(sources, observer, onSubscribe);

    return function () {
      subscription.unsubscribe();
    };
  });
};

concat._name = 'concat';

exports.default = concat;