var list1=["one","two","three","four","five"]

var list2=[1,2,3,4,5,]
var empty={}
for (i in list2){
    empty[list1[i]]=list2[i]
    
}
console.log(empty)
