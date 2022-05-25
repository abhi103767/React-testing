const {describe,expect,test} = require('@jest/globals')
const sum = require('../src/sumTestCases')


describe('All the testCases for sum', () => {

    test('both are postive number', () => {
       expect(sum(1,1)).toBe(2);
    })
    test('one of the number zero or both',()  => {
        expect(sum(0,1)).toBe(1);
        expect(sum(0,0)).toBe(0);
    })
    test('both are negative', () => {
        expect(sum(-1,-1)).toBe(-2);
    });


   
   
   
})