var readline=require("readline-sync")
var n=readline.questionInt("enter a number--")

let d={}
for(let i=0;i<n;i++){
    var age=readline.question("enter a any age----")
    var name=readline.question("enter a any name--")
    d[name]=age 
}
console.log(d)

