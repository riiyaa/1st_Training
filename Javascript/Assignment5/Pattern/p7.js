// P6: Write a program to draw a pattern given below from 0-9.  
// E.g. if n==5

n = 5
string = "";
count = 0;

//n is the number of lines in your pyramid   
for (i = 0; i < n; i++) {
    for (j = 0; j < n+n; j++) {
        if ((i + j) >= (n - 1) && (j-i) <= (n - 1) ){
            if (j <= n-1) {
                count ++;
                string += count
            } else {
                count--;
                string += count
            }
           
        }
        else{
            string+=" ";
        }
        
    }
    console.log(string);
    string = '';
    count = 0;
}
