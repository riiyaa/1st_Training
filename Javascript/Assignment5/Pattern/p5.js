// P5: Write a program to draw a pattern given below from 0-9.  
// E.g. if n==5


// n=5;
// string = "";

// for(i=0;i<n;i++){
//     for(j=0;j<n;j++){
//        if(j>i){
//            string += " "
//        }else{
//            string += "*"
//        }
        
//     }
//    string += "\n"
// }
// console.log(string);





n=5;
string = "";

for(i=0;i<n;i++){
    for(j=0;j<n;j++){
       if(i+j<n-1){
           string += " "
       }
       else{
           string += "*"
       }
    }
   string += "\n"
}
console.log(string);