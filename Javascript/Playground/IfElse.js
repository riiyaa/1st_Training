/* let greeting;
const hour = new Date().getHours(); 
if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  console.log("Hello "  + greeting); */

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);