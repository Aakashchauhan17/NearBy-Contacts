'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Applies a mapping function to the items emitted by an Observable, then
 * transforms the result into an Observable whos outputs are flattened into
 * a single Observable.
 *
 * @example
 * // Combining flatMap with fromEvent and fromPromise to create an Observable stream
 * // of data fetched when a certain element is clicked
 * function fetchOnClick(element) {
 *   return flatMap(
 *     fromEvent(element, 'click'),
 *     click => fromPromise(fetchData(click))
 *   )
 * }
 *
 * @example
 * // if available on Observable.prototype
 * // assuming registerSocket returns an Observable, this will merge all new messages
 * // from a set of websockets
 * socketUrls
 *  .flatMap(url => registerSocket(url))
 *  .map(parseMessage)
 *  .subscribe(handleEvent)
 *
 * @param  {Observable} input Input Observable
 * @param  {Function}   fn    Mapping function. May return a value, another Observable, or iterable.
 *                            The result will be transformed into an Observable with Observable.from
 * @return {Observable}       New Observable that emits the flattened outputs of all mapped values
 */
var flatMap = function flatMap(input, fn) {
  return new Observable(function (observer) {
    var subscriptions = new Map();
    var completed = void 0;
    var index = 0;

    var rootSubscription = input.subscribe({
      next: function next(value) {
        var thisIndex = index;
        try {
          subscriptions.set(thisIndex, input.constructor.from(fn(value)).subscribe({
            next: function next(val) {
              observer.next(val);
            },
            error: function error(e) {
              observer.error(e);
            },
            complete: function complete() {
              subscriptions.delete(thisIndex);

              if (completed && subscriptions.size === 0) {
                observer.complete();
              }
            }
          }));
          index += 1;
        } catch (e) {
          observer.error(e);
        }
      },
      error: function error(e) {
        observer.error(e);
      },
      complete: function complete() {
        completed = true;

        if (subscriptions.size === 0) {
          observer.complete();
        }
      }
    });

    return function () {
      subscriptions.forEach(function (subscription) {
        return subscription.unsubscribe();
      });
      rootSubscription.unsubscribe();
    };
  });
};

flatMap._name = 'flatMap';

exports.default = flatMap;