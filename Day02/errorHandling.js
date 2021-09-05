let fs = require("fs");

try{
    let a = fs.readFileSync("a.txt");

}catch(err){
    console.log(err.message);
}