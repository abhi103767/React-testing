const {describe,expect,test} = require('@jest/globals')
const timeLogic = require('../src/timeLogic')

describe('time testCases', () => {
    test('time can converted in seconds' , () => {
        expect(timeLogic(3600)).toBe('0 0 3')
        expect(timeLogic(0004)).toBe('0 0 0')

    })
})