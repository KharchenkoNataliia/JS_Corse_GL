const MATH_PI=3.14;
let result1 = 10 * 10;
result1 *= MATH_PI;
console.log('res=',result1)



const a = 10;
const b = 20;
let c = 40; 
c = c - a;
console.log('res=',c);
c -= a;
console.log('res=',c);

var n=100;
var m=10;
let z=20;
z+=n;
console.log(z);
z*=m;
console.log(z);


let text1 = "Natalia";
let text2 = "Kharchenko";
let text3 = text1 + " " + text2;
console.log(text3);


	

const radius = 10;
const name1 = "Natalia";
 
console.log(MATH_PI === 3.14);
 
console.log(name1 === "Olya");
 

console.log(radius > 10);
console.log(radius >= 10);
console.log(radius < 100);
console.log(radius !== 0);

// ternary	
const age = 25;
const height = 175;
let formula = 10;
 
const result = formula === '10'
	? height/age
	: height-age;

    console.log (result);

const result2 = formula === 10 && age>18
	? height/age
	: height-age

    console.log (result2) 