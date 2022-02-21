n=3

tree=""
base=""
botoom_base=""
top_chery=""



for (let i=1;i<=(n-1)*n;i++)
{
    temp_str=""
    if (i<n)
    {
        botoom_base=""
        top_chery=""
    }
    for(let j=-n;j<=n;j++)
    {
        if(i<n+1){
            if (j==0)
            {
                base+="="
                if(i<n)
                top_chery+="O"
            }
            else if(Math.abs(j)==1)
            {
                base+="|"
                top_chery+=" "
            }
            else
            {
                base+=" "
                top_chery+=" "
            }
            if(i<n)
            botoom_base+="="

        }
        if (Math.abs(j)==i%n && Math.abs(j)!=n &&Math.abs(j)!=0)
        {
            if (Math.sign(j)!=Math.sign(i))
            {
                temp_str+="/"
            }
            else if (Math.sign(j)==Math.sign(i))
            {
                temp_str+="\\"
            }
        }
        else if (Math.abs(j)==n  && i%n==0)
        {
            // temp_str+="\\"
            if (Math.sign(j)!=Math.sign(i))
            {
                temp_str+="/"
            }
            else if (Math.sign(j)==Math.sign(i))
            {
                temp_str+="\\"
            }
        }
        else if (Math.abs(j)<=i%n || i%n==0)
        {
            temp_str+="-"
        }
        else
        {
            temp_str+=" "
        }

    }
    tree+=temp_str
    if(i<n)
    {
        base+="\n"
    }
    if(i<(n-1)*n)
    {
        tree+="\n"
    }
}
console.log(top_chery)
console.log(tree)
console.log(base)
console.log(botoom_base)