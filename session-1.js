/* 
    * Whenever a js file runs a scenerio happens which is called execution context
    there are 2 phases in JS execution context
        1. Creation Phase
            # creation phase will start and memory will be created in memory component
        2. Execution Phase
            # ececution phase will start and code will be executed line by line

    there are 2 parts in js execution context
        1. memory component
        2. code component
    
    points:
    # Js creates memory by reading line by line from the left side
    # Js executes code by reading line by line from the right side

*/

// var nam = "pial";
// var age = 26;

// console.log(nam);
// console.log(age);

/* 
    progress:
        js - class : 1
        OS - class : 1
*/

var nam = "Iqbal";

function print () {
    var pial = "pial"
    console.log("This is ", pial);
}

print();

/* 
    progress:
        js - class : 2
            call stack
                global execution context
                local execution context
        OS - class : 1
*/