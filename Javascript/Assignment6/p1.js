// n = 3
// string = ""

// for (i = 0; i <= (n * n + 1); i++) {
//     temp_string = ""
//     for (j = -n; j <= n; j++) {
//         if (i == 0 && j == 0) {
//             temp_string += "o"
//         } else if (i == (n * n + 1) || j == 0 && i >= (n * 2 + 1) && i <= (n * n + 1)) {
//             temp_string += "="
//         } else if ((j == 1 || j == -1) && i >= (n * 2 + 1) && i <= (n * n + 1)) {
//             temp_string += "|"
//         }
//         else {
//             temp_string += "-"
//         }
//     }
//     string += temp_string + "\n";
// }

// console.log(string);



n = 3
string = ""
temp_zero = ""
for (i = 0; i <=n; i++) {
        
    for (j = -n; j <= n; j++) {
        if (i == 0 && j == 0) {
            temp_zero += "o"
            
        } else {
            temp_zero += " "
        }
    }

}
console.log(temp_zero);



for (var k = 0; k < n - 1; k++) {
    for (i = 1; i <= n; i++) {
        temp_string = ""        
        for (j = -n; j <= n; j++) {
            if (i == j) {
                temp_string += "\\"
            } else if (i == -j) {
                temp_string += "/"
            } else if (i > Math.abs(j)) {
                temp_string += "-"
            } else {
                temp_string += " "
            }
        }
        string += temp_string +"\n"
    }

}


for (i = 1; i <= (n + 1); i++) {
    temp_line = ""
    for (j = -n; j <= n; j++) {
        if (i == (n + 1) || j == 0 && i >= 1 && i <= (n + 1)) {
            temp_line += "=";

        } else if ((j == 1 || j == -1) && i >= 1 && i <= (n + 1)) {
            temp_line += "|"
        } else {
            temp_line += " "
        }
    }
    string+=temp_line+"\n"    
}
console.log(string);
