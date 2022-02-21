
//Binary search  with recursion

A = [1,2,3,4,5,6,7]
n=5
start_index = 0
end_index = A.length

function search( start_index , end_index){
    let mid = parseInt((start_index+end_index)/2)
    if(n==A[start_index]){
         return start_index
    }
    else if(n==A[end_index]){
         return end_index
    }
    else if(A[start_index] <= n && n<= A[mid]){
        return search(start_index,mid)
    }
    else if(A[mid] <= n && n <= A[end_index]){
        return search(mid,end_index)
    }
    else {
        return null
    }
}

console.log(search(0,6))