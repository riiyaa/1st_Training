arr = [1,2,3,4,5];
i= Math.floor(Math.random() * arr.length-1)
j = Math.floor(Math.random() * arr.length-1)
function shuffle(arr,i,j)
{
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}
// ans = shuffle(arr,i,j)
for(k=0;k<arr.length;k++){
    shuffle(arr,i,j)
}
console.log(arr);