
let n = 5;
let string = ""

for(i=-(n+1) ; i<=(n+1);i++){
    temp_str = ""
    for(j=-(n+1) ; j<=(n+1) ;j++){
        if(i==0 && j==0){
            temp_str += "X";
        }
        else if(j==0){
            temp_str += "0"
        }
        else if(i==0){
            temp_str += "o"
        }
        else if(j==-(n+1) || j== n+1){
            temp_str += "|"
        }
        else if(i==-(n+1) || i==n+1){
            temp_str += "="
        }
        else if((i<0 && j<0 && i==j)||(i>0 && j>0 && i==j)){
            temp_str += "\\"
        }
        else if((i<0 && j>0 && j==Math.abs(i)) || (i>0 && j<0 && i==Math.abs(j))){
            temp_str += "/"
        }
        else if(i<0 && j<0 && Math.abs(i)>Math.abs(j)){
            temp_str += Math.abs(j)
        }
        else if(i<0 && j<0 && Math.abs(i)<Math.abs(j)){
            temp_str += String.fromCharCode(n+j+98)
        }
        else if(i<0 && j>0 && Math.abs(i)<Math.abs(j)){
            temp_str += n-j+1
        }
        else if(i<0 && j>0 && Math.abs(i)>Math.abs(j)){
            temp_str += String.fromCharCode(j+97)
        }
        else if(i>0 && j<0 && Math.abs(i)<Math.abs(j)){
            temp_str += n+j+1
        }
        else if(i>0 && j<0 && Math.abs(i)>Math.abs(j)){
            temp_str += String.fromCharCode(Math.abs(j)+97)
        }
        else if(i>0 && j>0 && Math.abs(i)<Math.abs(j)){
            temp_str += String.fromCharCode(n-j+98)
        }
        else if(i>0 && j>0 && Math.abs(i)>Math.abs(j)){
            temp_str += j
        }
        else{
            temp_str += "-"
        }
    }
    string += temp_str + "\n"
}
console.log(string)