const {describe,expect,test} = require('@jest/globals')
const validate = require('../src/index')

describe('validate for password', () => {
  
    // test('All conditions satified', function(){
    //     expect(validate('A1aasd').status).toBe(true);
    // })

    test('minnimum eight character is needed', () =>{
       expect(validate('asda').status).toBe(false);
       expect(validate('asda').message).toBe('minnimum 8 character is needed')
    })

    test('atleast one number is needed', () => {
        expect(validate('ssadfsdfs').status).toBe(false);
        expect(validate('asadfsdfs').message).toBe('minnimum 1 number is needed')
    })

    test('atleast one capital is needed', () => {
        expect(validate('1aadfasfadf').status).toBe(false);
        expect(validate('1adfsdsddf').message).toBe('atleast 1 eight character needed in uppper case')
    })
})