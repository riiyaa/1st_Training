//Print array with recursion

A = [11,13,1,4,7,23]

function loop(index=0){
    if(index == A.length){
        return null
    }
    console.log(A[index]);
    index += 1
    loop(index);
    
}
loop()


//Print odd and even numbers with recursion

// y=""
// function odd(x){
//     if(x>10){
//         return null
//     }
//     y+=((2*x)-1);
//     y+="\n"
//     x += 1
//     odd(x);
//     return y
    
// }
// odd(1)
// console.log(y);


// function even(x){
//     if(x>10){
//         return null
//     }
//     console.log((x*2));
//     x += 1
//     even(x);
    
// }

// even(1)



//basic formula of recursion

// global variables //Variables where we need to store the Input and Output
// function recursive_function(argument1)  //argument1 is the argument which changes after iterations
// {
//     if (condition) //Breaking Condition
//     {
//         return result/null
//     }
//     argument1++/argument1-- //Chages in argument
//     //
//     //Action which needed to do store in output , print ,return etc...
//     //
//     recursive_function(argument1) //Recursion with new argument
// }