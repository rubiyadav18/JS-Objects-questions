
var  l = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
var d=[]
for (i of l){
    for (j in i){
        if (!d.includes(i[j])){
            d.push(i[j])
        }
    }
}
console.log(d)








