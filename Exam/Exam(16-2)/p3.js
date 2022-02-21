arr = [5,2,4,1,8,3];

function swap(arr,i,j){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quick(arr,i,j){
    if(i<j){
        // console.log(array);
        p = partition(arr,i,j);
        quick(arr,i,p-1)
        quick(arr,p+1,j)
    }
}

function partition(arr,i,j){
    pivot = arr[i];
    x = i-1;

    for(y=i;y<=j;y++){
        if(arr[y]<pivot){
            x++
            console.log(arr);
            swap(arr,x,y)
            console.log(arr);
        }
    }
    swap(arr,(x+1),j);
    return(x+1);
    
}
quick(arr,0,arr.length-1)
console.log(arr);