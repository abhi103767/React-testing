


function timeLogic(n){
    n =  Math.floor(n / 1000);

console.log(n);

    const hours = Math.floor(n / 3600);
    const remainingHour =  (n/3600) - hours;
    const minutes= Math.floor(remainingHour*60);
    const remainingMinutes = remainingHour*60 - minutes
    const seconds = Math.floor(remainingMinutes*60);

    const answer = [hours,minutes,seconds];
    const singular = ['hour','minute','second']

   if(answer.includes(0)){
       if(answer.includes(1)){

        for(let i = 0; i < answer.length; i++){
            if(answer[i] !== 1) singular.splice(i,1); 
             

        }

       }

    else {

    }

    

   }
 
   else {
       if(answer.includes(1)){
          
       }
       else {
         return answer
       }
   }
  

}

module.exports = timeLogic