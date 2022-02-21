process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here

process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
            return string.trim();
        });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

//DO NOT TOUCH   

function main() {
    let t = parseInt(readLine()); // T Test Cases

    //   console.log("lines",t)
    for (i = 0; i < t; i++) {
        let n = readLine().split(" ")
        let cats = parseInt(n[0]);
        let cans = parseInt(n[1]);

        array = [];
        counter = 0;
        food = readLine().split(" ")
        flag = true;

        for (j = 0; j < cans; j++) {


            if (counter % cats == 0) {

                counter = 0

                for (k = 0; k < array.length; k++) {
                    if (array[k] != 0) {
                        flag = false
                    }
                }

            }


            //Increase counter in each index +1

            if (array[counter] == undefined) {
                array[counter] = 1
            } else {
                array[counter] += 1
            }


            //Decrese counter -1 when cat have food 

            var index = parseInt(food[j]) - 1
            // console.log(index)


            if (array[index] == undefined) {
                array[index] = -1
            } else {
                array[index] -= 1
            }



            if (cans == (j - 1) && cans % cats == 0) {
                for (var k = 0; k < array.length; k++) {
                    if (array[k] != 0) {
                        flag = false
                        console.log(flag)
                    }
                }
            }

            counter += 1

        }
        if (flag = true) {
            console.log("YES")
        } else {
            console.log("NO")
        }


    }
}