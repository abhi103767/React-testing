const {describe,expect,test} = require('@jest/globals')

const validate = require('../src/index')

describe('validate for password', () => {



    test('All conditions satified', function(){
        expect(validate('1Aaa1434AAAtre354sdadsfafsfs').status).toBe(true);
        expect(validate('1aAasdadsfasfs').message).toBe('all is correct')
    })


    test('minnimum eight character is needed', () =>{
       expect(validate('asda').status).toBe(false);
       expect(validate('asda').message).toBe('minnimum 8 character is needed')
    })

    test('atleast one number is needed', () => {
        expect(validate('ssadfsdfs').status).toBe(false);
        expect(validate('asadfsdfs').message).toBe('minnimum 1 number is needed')
    })

    test('atleast one capital is needed', () => {
        expect(validate('a1sfaaadfa').status).toBe(false);
        expect(validate('aa1dfaasdfa').message).toBe('atleast 1 eight character needed in upper case')
    });

    test('atleast one should be small', () => {
        expect(validate('A1ASFASFSS').status).toBe(false);
        expect(validate('A1ASFASFSS').message).toBe('atleast one should be small character')
    })
    

})