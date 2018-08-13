'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transform = exports.toArray = exports.skipUntil = exports.throttle = exports.takeUntil = exports.takeLast = exports.take = exports.startWith = exports.skipLast = exports.skip = exports.scan = exports.reduce = exports.merge = exports.map = exports.interval = exports.fromPromise = exports.fromEvent = exports.forEach = exports.flatMap = exports.filter = exports.error = exports.delay = exports.defer = exports.debounce = exports.concat = exports.catchError = exports.addOperators = exports.addAll = exports.default = undefined;

var _addOperators = require('./addOperators');

var _addOperators2 = _interopRequireDefault(_addOperators);

var _addCreators = require('./addCreators');

var _addCreators2 = _interopRequireDefault(_addCreators);

var _catchError = require('./catchError');

var _catchError2 = _interopRequireDefault(_catchError);

var _concat = require('./concat');

var _concat2 = _interopRequireDefault(_concat);

var _debounce = require('./debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _defer = require('./defer');

var _defer2 = _interopRequireDefault(_defer);

var _delay = require('./delay');

var _delay2 = _interopRequireDefault(_delay);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _flatMap = require('./flatMap');

var _flatMap2 = _interopRequireDefault(_flatMap);

var _forEach = require('./forEach');

var _forEach2 = _interopRequireDefault(_forEach);

var _fromEvent = require('./fromEvent');

var _fromEvent2 = _interopRequireDefault(_fromEvent);

var _fromPromise = require('./fromPromise');

var _fromPromise2 = _interopRequireDefault(_fromPromise);

var _interval = require('./interval');

var _interval2 = _interopRequireDefault(_interval);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _scan = require('./scan');

var _scan2 = _interopRequireDefault(_scan);

var _skip = require('./skip');

var _skip2 = _interopRequireDefault(_skip);

var _skipLast = require('./skipLast');

var _skipLast2 = _interopRequireDefault(_skipLast);

var _skipUntil = require('./skipUntil');

var _skipUntil2 = _interopRequireDefault(_skipUntil);

var _startWith = require('./startWith');

var _startWith2 = _interopRequireDefault(_startWith);

var _take = require('./take');

var _take2 = _interopRequireDefault(_take);

var _takeLast = require('./takeLast');

var _takeLast2 = _interopRequireDefault(_takeLast);

var _takeUntil = require('./takeUntil');

var _takeUntil2 = _interopRequireDefault(_takeUntil);

var _throttle = require('./throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _toArray = require('./toArray');

var _toArray2 = _interopRequireDefault(_toArray);

var _transform = require('./transform');

var _transform2 = _interopRequireDefault(_transform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addAll = function addAll() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Observable;

  (0, _addCreators2.default)(target, [_defer2.default, _error2.default, _fromEvent2.default, _fromPromise2.default, _interval2.default]);

  (0, _addOperators2.default)(target.prototype, [_catchError2.default, _concat2.default, _debounce2.default, _delay2.default, _filter2.default, _flatMap2.default, _forEach2.default, _map2.default, _merge2.default, _reduce2.default, _scan2.default, _skip2.default, _skipLast2.default, _skipUntil2.default, _startWith2.default, _take2.default, _takeLast2.default, _takeUntil2.default, _throttle2.default, _toArray2.default, _transform2.default]);
};

exports.default = addAll;
exports.addAll = addAll;
exports.addOperators = _addOperators2.default;
exports.catchError = _catchError2.default;
exports.concat = _concat2.default;
exports.debounce = _debounce2.default;
exports.defer = _defer2.default;
exports.delay = _delay2.default;
exports.error = _error2.default;
exports.filter = _filter2.default;
exports.flatMap = _flatMap2.default;
exports.forEach = _forEach2.default;
exports.fromEvent = _fromEvent2.default;
exports.fromPromise = _fromPromise2.default;
exports.interval = _interval2.default;
exports.map = _map2.default;
exports.merge = _merge2.default;
exports.reduce = _reduce2.default;
exports.scan = _scan2.default;
exports.skip = _skip2.default;
exports.skipLast = _skipLast2.default;
exports.startWith = _startWith2.default;
exports.take = _take2.default;
exports.takeLast = _takeLast2.default;
exports.takeUntil = _takeUntil2.default;
exports.throttle = _throttle2.default;
exports.skipUntil = _skipUntil2.default;
exports.toArray = _toArray2.default;
exports.transform = _transform2.default;