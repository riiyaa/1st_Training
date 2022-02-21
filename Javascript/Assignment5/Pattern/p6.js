// n=5;
// string = "";

// for(i=1;i<=n;i++){
//     for(j=1;j<i;j++){
//         if(j<i){
//             string += j
//         }
//         else{
//             string += ""
//         }
        
//     }
//    string += "\n"
// }
// console.log(string);



n=5;
string = "";

for(i=1;i<n;i++){
    for(j=1;j<=i;j++){
        string += j
        if(j==i){
            j++
        }
        else{
            string += " "
        
        }
        
    }
   string += "\n"
}
console.log(string);