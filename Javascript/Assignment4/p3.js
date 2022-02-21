// P3:- Write a program to draw a pattern given below from 0-9.  (max 2 loop allowed) [Don't Reveal this one pre handed]
// E.g. if n==5
// \ - - - /
// | \   / | 
// |   o   |
// | /   \ |
// / - - - \

n = 9;
string = ""

for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i == ((n + 1) / 2) && j == ((n + 1) / 2)) {
            string += "o"
        } 
        else if (i == j) {
            string += "\\"
        } 
        else if (j + i == n + 1) {
            string += "/"
        }
        else if (i==1&&i+j<=n || i==n && i+j>=n){
            string += "-"
        }
        else if(j==1 && i+j<=n || j==n && i+j>=n){
            string += "|"
        } 
        else {
            string += " "
        }
    }
    string += "\n"
}
console.log(string);





//----------------------------------------------------------------------------------------------------------------------------------------



// \ - - - /
// | \   / | 
// |   o   |
// | /   \ |
// / - - - \