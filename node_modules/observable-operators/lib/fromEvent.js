'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates an Observable by adding an eventListener to the specified
 * DOMElement. Removes event listener when the Observable's observer is unsubscribed
 *
 * @example
 * Observable.fromEvent(button, 'click').subscribe(handleClick)
 *
 * @param  {Element}    element     Dom element to listen on
 * @param  {String}     eventName   Event type
 * @param  {Function}   Constructor Observable constructor
 * @return {Observable} Observable sequence of events
 */
var fromEvent = function fromEvent(element, eventName) {
  var Constructor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Observable;
  return new Constructor(function (observer) {
    var handler = function handler(event) {
      observer.next(event);
    };

    element.addEventListener(eventName, handler, true);

    return function () {
      element.removeEventListener(eventName, handler);
    };
  });
};

fromEvent._name = 'fromEvent';

exports.default = fromEvent;