var m="MISSISSIPPI"
var i=0
var d={}
while (i<m.length){
    var j=0
    var count=0
    while (j<m.length){
        if (m[i]==m[j]){
            count++
        }
        d[m[i]]=count
        j++

    }
    i++

}
console.log(d)

