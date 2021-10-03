var mainString="My name is kumar, and my friend’s name is Dhamu"
var s=mainString.split(" ")
var i=0
var c=0
while (i<mainString.length){
    if (s[i]=="is"){
        c++

    }
    i++
}
console.log(c)
