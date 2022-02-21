// Write a program in C to display the multiplication table of a given integer .
z=""
// n=""
function table(x,y=1){
    if(y>10){
        return null
    }
    n=x*y;
    z+=x + " * " + y + " = " + n+"\n"
    // return
    y+=1;
    table(x,y)
    return z
}
console.log(table(2))
// console.log(z);