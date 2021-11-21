	
const arr = [7, 4, 5, 2, 3];
 
const arr1=arr.sort(
  (curr, next) => {
    if (curr < next) {
      return -1;
    }
  }
); 
console.log(arr);

	
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
 console.log(sum);
 
sum=0;
arr.forEach((num, index) => {
  sum += num;
})
 
console.log(sum);
console.log (arr.map(function(num, index) {
    return num *5;
  }));

console.log (arr.map(num => num*5 ));
console.log (arr.filter((num) => num !== 3));

const arr2 = [
    { a: 1, b: 3 },
    { a: 2, b: 4 },
  ];
   
  console.log (arr2.reduce((acc, item) => {
    if (item.a > 1) {
      acc.push({
        ...item,
        c:item.b*10,
      })
    }
    return acc;
  }, []));
   
	
  const nums = ['1', '2', '3', '4', '5', '6'];
  console.log(nums.join(' '));