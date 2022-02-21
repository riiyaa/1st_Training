n=5
string = ""

for(i=-(n+1);i<=(n+1);i++){
    temp_str = ""
    for(j=-(n+1);j<=(n+1);j++){
        if(j==-(n+1) || j==(n+1)){
            temp_str += "|"
        }
        else if(i==-(n+1) || i==(n+1)){
            temp_str += "="
        }
        else if (j==0 && i==0){
            temp_str += "X"
        }
        else if (i==0 || j==0){
            temp_str += "0"
        }
        else if(i+j==0){
            temp_str += "/"
        }
        else if(i-j == 0){
            temp_str += "\\"
        }
        else if(i<0 && j<0 && i-j <=0){
            temp_str += Math.abs(j)
        }
        else if(i<0 && j<0 && i-j >=0){
            temp_str += String.fromCharCode((n+j+1) +97)
        }
        else if(i<0 && j>0 && i+j <=0){
            temp_str += String.fromCharCode(j +97)
        }
        else if(i<0 && j>0 && i+j >=0){
            temp_str += n-j+1
        }
        else if(i>0 && j<0 && i+j >=0){
            temp_str += String.fromCharCode(Math.abs(j) +97)
        }
        else if(i>0 && j<0 && i+j <=0){
            temp_str += n+j+1
        }
        else if(i>0 && j>0 && i-j >=0){
            temp_str += j
        }
        else if(i>0 && j>0 && i-j <=0){
            temp_str += String.fromCharCode((n-j+1) +97)
        }
        else {
            temp_str += " "
        }
    }
    string += "\n" + temp_str
    
}
console.log(string);