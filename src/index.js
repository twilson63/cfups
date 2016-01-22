var { curry, propEq, compose, prop, find, path } = require('ramda')

var svcFind = compose(find, propEq('name'))


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
const flatter = (a, name, b, config) =>
  compose(path(b), svcFind(name), path(a))(config)

// cfups custom
module.exports = curry((name, config) => flatter(
  ['VCAP_SERVICES', 'user-provided'],
  name,
  ['credentials'],
  config
))
