import test from 'ava';
const orderup = require('./orderup.js');

test('valid args', t => {
  t.throws(() => {
    orderup();
  }, Error);
  t.throws(() => {
    orderup(false);
  }, TypeError);
});
