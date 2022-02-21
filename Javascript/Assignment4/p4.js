//                               
// E.g. if n==5 

// 0 0 0 0 0 0 0 0 0 0 0 0 0
// 0 a b c d e f 5 4 3 2 1 0
// 0   a b c d e 4 3 2 1   0
// 0     a b c d 3 2 1     0
// 0       a b c 2 1       0
// 0         a b 1         0
// 0           a           0
// 0         1 b a         0
// 0       1 2 c b a       0
// 0     1 2 3 d c b a     0
// 0    1 2 3 4 e d c b a  0
// 0 1 2 3 4 5 f e d c b a 0
// 0 0 0 0 0 0 0 0 0 0 0 0 0



n=5;
string =""
for(i=-(n+1);i<=(n+1);i++){
    temp_string =""
    for(j=-(n+1);j<=(n+1);j++){
        if(i==-(n+1) || j==-(n+1) || i==(n+1) || j==(n+1)){
            temp_string += "0"
        }
        else if (i>0&&j<0 && (i+j)>=0){
            temp_string += (i+j)+1
        }
        else if(i>=0&&j>=0 && i>=j ){
            temp_string += String.fromCharCode((Math.abs(i-j)+97))
        }
        else if (i<=0&&j<=0 && i<=j ){
            temp_string += String.fromCharCode(Math.abs(i-j)+97)
        }
        else if ( i<0&&j>0 && (i+j)<=0){
            temp_string += Math.abs(i+j)+1
        }
        else{
            temp_string += " "
        }
    }
    temp_string += "\n"
    string += temp_string
}

console.log(string);

