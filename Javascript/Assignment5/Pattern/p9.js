n = 5;
string = "";
count = 1;
for(i=1;i<=5;i++){
    for(j=1;j<=i;j++){
        string += j%2 + " ";
        count++ 
    }
    string += "\n"
}
console.log(string);







n=5
string = ""

str="     ";
for(i=1;i<=n;i++){
    temp_str=""
    for(j=1;j<=n;j++){
        if(i+j<=n+1||i==1||j==1){
            temp_str += "@"
            
        }
        else{
            temp_str += " "
        }
    }
    string +="     "+temp_str+ "\n";
    for(k=1;k<=n;k++){
        if(i+k>=n+1){
            temp_str += "@"
        }
        else{
            temp_str += " "
        }
    }
    string +="     "+temp_str+ "\n";
    
    
}
console.log(string);