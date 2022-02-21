string = ""


for(m=1; m <= 5; m++)
{
for(n=1; n<=m; n++)
{
string += "0"+n
if(n == m)
continue;
else
string += " "
}
string += "\n"
}

console.log(string);