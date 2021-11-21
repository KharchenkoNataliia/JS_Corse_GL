// Task 4 - filter items, where a > 5 and extend with
// new field *sum* with value a + b
 const arrayItems = [
   { a: 1, b: 3 },
   { a: 3, b: 3 },
   { a: 6, b: 3 },
   { a: 10, b: 10 },
   { a: 41, b: 1 },
   { a: 0, b: 4 }
 ];

function filterAndExtendArrayItems(array) {
  const filtered = array.reduce((acc, item) => {
    if (item.a > 5) {
      acc.push({
        a: item.a,
        b: item.b,
        sum: item.a + item.b,
      })
    }
    return acc;
},  []);
return filtered;
}
console.log (filterAndExtendArrayItems(arrayItems))


// Task 5 - merge arrays and remove duplicates
const arNum = [1, 2, 3, 4, 5, 6];
const arNum2 = [15, 6, 3, 20, 11];
function mergeArraysWithoutDuplicates(array1, array2) {
   const array3=array1.concat(array2);
   const result=array3.filter((item,index)=>{
       return array3.indexOf(item)===index;
   });
  
  return result;
}
console.log(mergeArraysWithoutDuplicates(arNum,arNum2))


const n = 20;

function printEvenNumbers(n) {
  let str = "";
  let arr =[];
  
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
    (i==1)? arr.push(i):(arr.push(' '+i)); 
    } 
  }
  return (str = arr.join());
}
console.log(printEvenNumbers(20))

