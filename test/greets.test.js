const {test} = require('node:test');
const assert = require('node:assert');

const {greetings, randomGreets} = require('../greet');


test('atleast 5 greetings in the factory', () => {
    assert.ok(greetings.length >= 5, "there are atleast 5 greetings");
})

test('no empty greet', () => {
    for(const greet of greetings) {
        assert.strictEqual(typeof greet, "string", "greet must be a string");
        assert.ok(greet.trim().length > 0, "an empty greet found!");
    }
})

test('greetings returns a greet from the list', () => {
    const res = randomGreets();
    assert.ok(greetings.includes(res), "the result must be from the list");
})