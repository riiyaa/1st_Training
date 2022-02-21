//let str = "Please locate where 'locate' occurs!"
//new1 = str.indexOf("where");
//console.log(new1);    // indexOf return what is the index of first word that we will search

//new2 = str.lastIndexOf("where");
//console.log(new2);    //lastIndexOf return index of last occurance of a string

//new3 = str.indexOf("is");
//new4 = str.lastIndexOf("is");

//console.log(new3 , new4);  //indexOf and lastIndexOf return -1 when string is not found

//new5 = str.indexOf("locate", 6);
//console.log(new5);         // number pachi string kaya index par aave che 
//locate after 6 return 7 after 8 or above return 21

//new6 = str.search("where");
//console.log(new6);     // search cannot take second value but same as indexOf

// let str = "The rain in SPAIN stays mainly in the plain"

// new7 = str.match(/ain/g);     //return match field but accept case sensitive
// new8 = str.match(/ain/gi)     //return match field but ignore case sensitive
// console.log(new7,new8);     


// let str = "Hello world, welcome to the universe.";
// new9 = str.includes("world");    //return true/false where string is found or not
// new10 = str.includes("world",12)  // return true/false where string is found/not after second index
// console.log(new9, new10);

// let str = "Hello world, welcome to the universe.";
// new11 = str.startsWith("world");       //not found string at starting position
// new12 = str.startsWith("world" , 6);   //found string after index
// console.log(new11 , new12);

let text = "Hello world, welcome to the universe.";
new13 = text.endsWith("world");     // not end with string
new14 = text.endsWith("world", 11);     //check the position of index last charater of string end with word
console.log(new13,new14);