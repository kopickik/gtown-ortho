var test = require('tape');
var first = require('../spec/first');

test('compute() should multiply by 555', function(t) {
  t.equal(1665, first(3));
  t.end();
});
