// P2:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
// E.g. if n==5
//     @
//    @@
//   @@@
//  @@@@
// @@@@@
//      @@@@@
//      @@@@
//      @@@
//      @@
//      @

// n = 4
// string = ""
// str=""
// for(i=1;i<=n;i++){
//     str += "-";
// }

// for (i = 1; i <= n; i++) {
//     temp_str=""
//     for (k = 1; k <= n; k++) {
//         if (i + k >= n + 1) {
//             temp_str += "@"
//         } else {
//             temp_str += " "
//         }
//     }
//     string += temp_str+str+"\n";
// }

// for (i = 1; i <= n; i++) {
//     temp_str = ""
//     for (j = 1; j <= n; j++) {
//         if (i + j <= n + 1 || i == 1 || j == 1) {
//             temp_str += "@"

//         } else {
//             temp_str += " "
//         }
//     }
//     string += str + temp_str + "\n";
// }

// console.log(string);




n = 4
string = ""

for (i = -n; i <= n; i++) {
    if(i==0){
        continue;
    }
    temp_str=""
    for (j = -n; j<= n; j++) {
        if(j==0){
            continue
        }
        if ( (Math.abs(i) + Math.abs(j) )<=n+1 && Math.sign(i)==Math.sign(j)) {
            temp_str += "@"
        } else {
            temp_str += " "
        }
    }
    string += temp_str+"\n";
}
console.log(string);