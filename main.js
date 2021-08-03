const input = 'awesomeness in the ocean';

//vowels to be extracted from the variable
const  vowels = ['a', 'e', 'i', 'o', 'u'];

//stores the vowels extracted
let resultArray = [];

//iterating through each element in an array
for(let i = 0; i < input.length; i++) {
//console.log(i);
for(let j = 0; j < vowels.length; j++) {
    if(input[i] ===vowels[j]) {
        //console.log(j);
        resultArray.push(input[i]);
    }
}
//checks if the input is 'e' and pushes it to the resultArray
if(input[i] = 'e') {
     resultArray.push(input[i]);
        }
     if(input[i] = 'u') {
         resultArray.push(input[i]);
            }
}
console.log(resultArray.join('').toUpperCase());