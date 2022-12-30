const fs = require('fs');

// fs.readFile('fileblablabla.txt' , 'utf8' , (err , data) => {
//     console.log(err,data)
// })



/*
const a = fs.readFileSync('file.txt');
console.log(a);

console.log(a.toString);


console.log("Finish Reading File .. ");


*/


fs.writeFile("file2.txt" , "this is a file2 data" , ()=>{
    console.log("written to the file ");
});


