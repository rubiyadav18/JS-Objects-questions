var  prompt =require("readline-sync")
var user=  prompt.questionInt("enter a any number--")
var dic={}
for (let i=0; i<=user;i++){
    dic[i]=i**2
}
console.log(dic)