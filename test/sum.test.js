const assert = require('assert');
const { sum } = require('../src/sum');

assert.strictEqual(sum(2, 3), 5);
assert.strictEqual(sum(-1, 1), 0);
assert.strictEqual(sum(0, 0), 0);

console.log('All sum tests passed');
