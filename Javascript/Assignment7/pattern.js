var arr = []
n=4
for (i=1;i<=n;i++)
{
    temp_arr=[]
    for (j=0;j<n;j++)
    temp_arr.push(0)
    arr.push(temp_arr)
}
// console.log(arr);
level=0
curr_i=0
curr_j=0
value=1
change_flag=false
iteration_rotate=n
iteration_remain=iteration_rotate
for (i=1;i<=n*n;i++)
{
    if (iteration_remain<=0){
        if (level==1)
        {
            level=2
            curr_i-=1
            curr_j-=1
            iteration_remain=iteration_rotate
        }
        else if (level==2)
        {
            console.log(curr_i,curr_j)
            level=3
            curr_j+=1
            curr_i-=1
            iteration_rotate-=1
            iteration_remain=iteration_rotate
        }
        else if (level==3)
        {
            curr_i+=1
            curr_j+=1
            level=0
            iteration_remain=iteration_rotate
        }
        else if (level==0){
            level=1
            curr_i+=1
            curr_j-=1
            iteration_rotate-=1
            iteration_remain=iteration_rotate
        }
    console.log(arr,"level",level,"total_iteration",iteration_rotate)

    }

    // console.log(iteration_remain,iteration_rotate,level)
    if (level==0)
    {
        // console.log("Index",curr_i,curr_j)
        arr[curr_i][curr_j]=value
        curr_j+=1
    }
    else if (level==1)
    {
        arr[curr_i][curr_j]=value
        curr_i+=1
    }
    else if (level==2)
    {
        console.log(curr_i,curr_j)
        arr[curr_i][curr_j]=value
        curr_j-=1
    }
    else if (level==3)
    {
        console.log(curr_i,curr_j)
        arr[curr_i][curr_j]=value
        curr_i-=1
    }
    value+=1
    iteration_remain-=1
}
console.log(arr)