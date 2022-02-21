
arr = [0, 'a', 0, 'A', 0, 1.5, 'M', 'C', 8, 3, 1, 'b', 0, 0, 'B']
function ins(aj,curr){
    if(typeof aj == 'string'){
        aj1=aj.charCodeAt()
        if(aj1>91){
            arr1=aj1-97;
        }
        else{
            arr1=aj1-65;
        }
    }
    else{
        arr1=aj
    }
    if(typeof curr =='string'){
        curr2=curr.charCodeAt()
        if(curr2>91){
            curr1=curr2-97;
        }
        else{
            curr1=curr2-65;
        }
    }
    else{
        curr1=curr
    }
if(curr1==arr1 && typeof(aj)!='string'){
    return false
}
else if(curr1==arr1 && aj1>curr2 && typeof(aj)=='string' && typeof(curr)=='string'){
    return false
}
else if(curr1==arr1 && typeof(curr)!='string'){
    return true
}
else if(aj>curr){
    return true
}
return false
}
for(i=1;i<arr.length;i++){
    current=arr[i]
    for(j=i-1;j<=0 && ins(arr[j],current);j--){
        arr[j+1]=arr[j]
        
    }
    arr[j+1]=current
}
console.log(arr)