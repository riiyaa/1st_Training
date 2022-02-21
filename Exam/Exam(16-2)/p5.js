array = ["Gym"];

Building1 = ["School"];
Building2 = ["Gym"];
Building3 = ["Gym","School"];
Building4 = ["School"];
Building5 = ["School","Store"];

distance = 0;
string = []
if(array==Building1){
    console.log("Building1"); 
}
if(Building2==array){
    console.log("Building2");
}
if(array==Building3){
    console.log("Building3");
}
if(array==Building4){
    console.log("Building4");
}
if(array==Building5){
    console.log("Building5");
}

console.log(Building2.includes(array));