// Tasks 1 -  convert array of strings
    // from lowercase to uppercase


 console.log(convertToUppercase(ar1))

 function convertToUppercase(array) {
    let res=[]; 
    for  (let i=0;i<array.length;i++){
        res.push(array[i].toUpperCase())
  
    }
    return  res;
 }

 console.log(convertToUppercase(ar1))

 // Task 2 - should calculate amount of provided letter in
// the provided string
// ('letter', 't') => 2

 function calculateLetters(string, letter) {
    let count=0;
     for (let i=0; i<string.length;i++){
        if (string.charAt(i)===letter ) {
            count+=1
        }
    } 
    return count; 
  }
  console.log(calculateLetters('lshould calculate a letter', 'a'))


  // Task 3 - replace numbers with spaces
// in the provided string
// 'I9like5JS' => 'I like JS'
function replaceNumbers(string) {
    const regex = /[0-9]/g
    return string.replace(regex,' ')
}

console.log(replaceNumbers('I9like5JS'))

// Task 5 - return a new string that should contain
// a letter taken by index argument from every string in array
// if index is bigger than string length - add space instead
// array - ["osmos", "uterque", "water", "crop",
//         "&", "swap", "cat", "brew", "Esmeralda"]
// index - 1
// result "start wars"
function buildStringUsingIndex(array, index) {
    let resStr='';
    let char='';
    for (let i=0;i<array.length;i++ ){
      if (index<array[i].length){
        resStr=resStr+array[i].substr(index,1)
      } else {
        resStr=resStr+' '
      }
      console.log (i,'-',array[i],'-',array[i].length, ' ',resStr,'-',array[i].charAt(index) ) 
    }
    return resStr;
}

console.log(buildStringUsingIndex(["osmos", "uterque", "water", "crop","&", "swap", "cat", "brew", "Esmeralda"],1))

// Tasks 6 - check, if string is palindrome
// and return "The string is palindrome"
// or "The string is not palindrome"
function palindromeValidator(str) {
    let str2 = str.split('').reverse().join('');

    if (str2.toLowerCase == str.toLowerCase) {
        return 'The string is palindrome';
    } else {
        return 'The string is not palindrome';
    }
}
console.log(palindromeValidator('Qwerewq'))