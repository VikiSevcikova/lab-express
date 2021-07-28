const assert = require('assert');

function add(a,b){
    return a*b;
}

function testAdd(){
    let test1 = add(1,1);
    if(test1 !=2){
        console.log("test failed");
    }

    let a = 0;
    let b = 0;

    for(a=0; a<100; a++){
        for(b=0; b<100; b=b+2){
            let result = a+b;
            let fresult = add(a,b);
            assert(result === fresult);
        }
    }
}

// testAdd();

let list1 = ["a", "b", "c", "d", "e"];
let list2 = ["a", "b", "c", "d", "e"];
assert.deepStrictEqual(list1,list2, 'deepStrictEqual checks the elements in the arrays are identical');

let person1 = { "name":"john", "age":"21" };
let person2 = { "name":"jane", "age":"19" };
// deepEqual checks the elements in the objects are identical
assert.notDeepStrictEqual(person1, person2, 'these two objects are NOT the same');

const page = `
<!DOCTYPE html>
<html>
    <head>
        <title>Assert module</title>
    </head>
    <style>
        h1{text-align: center;}
    </style>
    <body>
        <h1>Assert</h1>
        <code>
            let list1 = ["a", "b", "c", "d", "e"]; </br>
            let list2 = ["a", "b", "c", "d", "e"]; </br>
            assert.deepStrictEqual(list1,list2, 'deepStrictEqual checks the elements in the arrays are identical');
        </code>
        <hr>
        <code>
            let person1 = { "name":"john", "age":"21" }; </br>
            let person2 = { "name":"jane", "age":"19" }; </br>
            assert.notDeepStrictEqual(person1, person2, 'these two objects are NOT equal');
        </code>
        </br>
        <a href="/">Return to Main Page</a>
    </body>
</html>
`
exports.getPage = () => {
    return page;
}