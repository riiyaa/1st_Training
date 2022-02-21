// P1:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed)
// E.g. if n==5 
// # * * * #
// * # * # *
// * * # * *
// * # * # *
// # * * * #

for(i=1;i<=n;i++){
    for(j=1;j<=n;j++){
        if(j==i || j+i==n+1){
            string += "#"
        }
        else{
            string += "*"
        }
    }
    string += "\n"
 }
 console.log(string);
