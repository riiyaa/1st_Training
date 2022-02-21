 var text = "";
 
//  for (let i = 0; i < 10; i++) {
//   if (i === 3) { break; }        //can be used to jump out the loop 
//   text += "The number is " + i + "\n";
// }
// console.log(text);


for (let i = 0; i < 10; i++) {
  if (i === 3) { continue; }     //can be used to skip the one loop 
  text += "The number is " + i + "\n";
}
console.log(text);