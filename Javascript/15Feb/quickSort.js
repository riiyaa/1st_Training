let arr = [5, 4, 9, 2, 8];
//Swapping
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
//Quick_Sort
function quick(arr, i, j) {
    if (i < j) {
        p = partition(arr, i, j);
        quick(arr, i, p - 1);
        quick(arr, p + 1, j);
    }
}
//Partition
function partition(arr, i, j) {
    pivot = arr[i];
    x = (i - 1);
    for (y = i; y <= j; y++) {
        // console.log("Befor"+arr);
        if (arr[y] < pivot) {
            // console.log(arr[y] < pivot)
            x++;
            swap(arr, x, y);
            // console.log("After" +arr+"\n");
        }
    }
    swap(arr, (x + 1), j);
    return (x + 1);
}
// //Main
// let pivot = Math.floor(arr.length/2);
quick(arr, 0, arr.length - 1);
console.log(arr);