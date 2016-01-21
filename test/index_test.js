var { test } = require('tap')
var cfups = require('../index')
var config = require('./cf-services')

test('get cloud foundry user-defined service success', (t) => {
  var host = cfups('foo-drain', config).host
  t.equals(host, 'foobar.com')
  t.end()
})

test('get cloud foundry user-defined service fail', (t) => {
  t.equals(cfups('bar-drain', config), undefined)
  t.end()
})
