const user = {
    firstName: 'Natalia',
    lastName: 'Kharchenko',
    age: 39,
  };
   
  const info = 'User ' + user.firstName
      + ' ' + user.lastName + ' age ' + 
      + user.age;
   
  console.log(info);
  // output: "As a Director, Steven Spielberg created 57 movies";
  


 
let interestingResult = '4' + 8 - 6;
console.log(interestingResult);
interestingResult = '4' + 8 + 6;
console.log(interestingResult);
interestingResult = '4' + '8'+ '6';
console.log(interestingResult);


const age = 39;
const name1 = 'Natalia';
 
const result = `${name1} is ${age} years old`; 
console.log(result);

const myStr = 'Me awesome string';
const index=4;
console.log (myStr.split(' '));
console.log (myStr.charAt(index), myStr.includes('Me'),myStr.indexOf('Me'));
console.log (myStr.slice(5));

const myStr2 = 'Me awesome string12';	
const regex = /[0-9]/g;
console.log(myStr2.match(regex));
console.log(myStr2.replace('12', '34'));