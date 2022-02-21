//P1:- Give Result of asin(x) +acos(x)

// const x = 90;

// let sum = Math.sin(x) + Math.cos(x);

// console.log(sum);



//P2:- Give Result of abs(x)*x

// const x = 30;

// let res = Math.abs(x)* x;

// console.log(res);


//P3:- Write program for given formula in attached image

const a = 8;
const b = 18;
const c = 10;
let root1 , root2,des;

des = (b * b) - (4 * a * c);

if(des>0){
    root1 = (-b + Math.sqrt(des)) / 2*a;

   root2 = (-b - Math.sqrt(des)) / 2*a;
}
else{
    root1 = root2 = -b / (2*a);
}

console.log(`The result of this formula is  ${root1} and ${root2}`);