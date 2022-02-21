// Selection Sort

let arr = ['a', 'm', 'D', 'd', 'Z', 'M', 'K', 'r', 'V'];
let min;
let temp = 0;


function findMin(var1,var2) {
    var1 = var1.charCodeAt();
    var2 = var2.charCodeAt();

    if (var1 > 91) {
        val1 = var1 - 97;
    }
    else {
        val1 = var1 - 65;
    }
    if (var2 > 91) {
        val2 = var2 - 97;
    }
    else {
        val2 = var2 - 65;
    }
    // console.log(a,b,a1,b1);
    if(val1==val2 && var2 < var1){
        return true;
    }
    else if(val1 < val2){
       return true;
    }
    return false;
    
}


for (i = 0; i < arr.length; i++) {
    min = i;
    for (j = i + 1; j < arr.length; j++) {
        if (findMin(arr[j], arr[min])) {
            min = j;
        }
    }
    temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
}
console.log(arr);