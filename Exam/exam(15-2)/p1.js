//Q-1: There are Two elements whose sum is closest to zero (An Array of integers is given, both +ve and -ve. You need to find the two elements such that their sum is closest to zero.)

arr = [5,6,8,-7,5];
minSum = arr[0]+arr[1];
let x =0 , y=0,sum;
// # Min = math.min(arr)
// # console.log(arr)
for (let i = 0; i < arr.length - 1; i++) {
    for (j = i+1; j < arr.length - 1; j++) {
        sum = arr[i] + arr[j]
        if(Math.abs(minSum)>Math.abs(sum)){
            minSum = arr[i] + arr[j];
            x=i;
            y=j;
        }
    }
}
// console.log(minSum);
console.log("(" + arr[x] + "," + arr[y] + ")")