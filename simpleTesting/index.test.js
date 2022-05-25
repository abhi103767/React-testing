const {test} = require('@jest/globals')
const { expect } = require('expect')
const sum = require('./index.js')



test("Should Work on positive Number", function(){
    expect(sum(2,2)).toBe(4);
    expect(sum(0,0)).toBe(0);
    expect(sum(10,15)).toBe(25);
    expect(sum(100,0)).toBe(100)
})