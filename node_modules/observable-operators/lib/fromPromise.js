'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defer = require('./defer');

var _defer2 = _interopRequireDefault(_defer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transforms a Promise in to an Observable that emits a single value upon
 * Promise resolution. The Observable will error if the promise does. This method
 * requires that the Promise has already been created so that it may be passed in
 * as the argument. If you wish to defer Promise creation until the Observable has been
 * subscribed to see {@link defer}.
 *
 * @example
 * Observable.fromPromise(myPromise).subscribe(handleCall)
 *
 * @example
 * // will also work with the return values of async functions
 * async function makeCall() {
 *  const response = await fetch(...)
 *  return handleReponse(response)
 * }
 *
 * Observable.fromPromise(makeCall()).subscribe(console.log)
 *
 * @param  {Promise}    promise A Promise
 * @param  {Function}   Constructor Observable constructor
 * @return {Observable} Observable
 */
var fromPromise = function fromPromise(promise) {
  var Constructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Observable;
  return (0, _defer2.default)(function () {
    return promise;
  }, Constructor);
};

fromPromise._name = 'fromPromise';

exports.default = fromPromise;