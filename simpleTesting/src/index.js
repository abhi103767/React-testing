// Time conversion function


//password validator 

//at least min 8 charactor
// at least 1 small case
// at least 1 capital case
// at least number

const validator = (pass) => {
    const small = 'abcdefghijklmnopqrstuvwxyz'
    const number = '1234567890'
    console.log()

if(pass.length < 8){
    return {
        status : false,
        message : 'minnimum 8 character is needed'
    }
}
if(!number.split('').find((element) => pass.includes(element))){
    return {
        status : false,
        message: 'minnimum 1 number is needed'
    }

}

if(!small.split('').find((el) => pass.includes(el.toUpperCase()))){
    return {
        status : false,
        message : 'atleast 1 eight character needed in uppper case'
    }
}
return {
    status : true,
    message : 'all is correct'
};

}
module.exports = validator;