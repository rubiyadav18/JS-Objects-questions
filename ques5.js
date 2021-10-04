var readline=require("readline-sync")
var  n=readline.question("enter a number--")
var d={"name":"rubi","age":"28","marks":"56"}
for (i in d){
    if (i==n){
        console.log("exit")
        break
    }
    else{
        console.log("not exit")
        break
    }
}