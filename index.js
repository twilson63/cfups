'use strict';

var _require = require('ramda');

var curry = _require.curry;
var propEq = _require.propEq;
var compose = _require.compose;
var prop = _require.prop;
var find = _require.find;
var path = _require.path;

var svcFind = compose(find, propEq('name'));

// # flatter
//
// Takes
// path : defined by an array of strings
// name : name of the object in the array
// path : path by an array of strings
// object : the entire object to walk
//
// then returns
// flatter :: ([String] -> String -> [String] -> Object) -> Object
var flatter = function flatter(a, name, b, config) {
  return compose(path(b), svcFind(name), path(a))(config);
};

// cfups custom
module.exports = curry(function (name, config) {
  return flatter(['VCAP_SERVICES', 'user-provided'], name, ['credentials'], config);
});
