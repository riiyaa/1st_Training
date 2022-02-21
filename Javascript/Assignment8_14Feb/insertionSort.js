// Selection Sort

let arr = ["a","M","A",1.3,3,8];
let str1 = [];
let str2 = [];
// let min;
// let temp = 0;


// function findMin(var1,var2) {
//     var1 = var1.charCodeAt();
//     var2 = var2.charCodeAt();

//     if (var1 > 91) {
//         val1 = var1 - 97;
//     }
//     else {
//         val1 = var1 - 65;
//     }
//     if (var2 > 91) {
//         val2 = var2 - 97;
//     }
//     else {
//         val2 = var2 - 65;
//     }
//     // console.log(a,b,a1,b1);
//     if(val1==val2 && var2 < var1){
//         return true;
//     }
//     else if(val1 < val2){
//        return true;
//     }
//     return false;
    
// }


        for (let i = 1; i < arr.length; i++) {
          let currentValue = arr[i]
          let currentIndex = i
          let j
          for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
            if(currentValue>65){
                if(currentValue>91){
                    str1 = arr[currentIndex].charCodeAt()-97
                }
                else{
                    str2 = arr[currentIndex].charCodeAt()-65
                }
            }
          }
          arr[j + 1] = currentValue
        }
        console.log(str1,str2);