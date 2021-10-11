var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
// var max1=0
// var max2=0
// var max3=0
// var e=[]
// for (i in my_dict){
//     for (j in my_dict){
//         if (my_dict[i]>max1){
//             max1=my_dict[i]
//         }
//         else if (max1>my_dict[j] && max2 <my_dict[j]){
//             max2=my_dict[j]
//         }
//         else if (max2>my_dict[j] && max3<my_dict[j]){
//             max3=my_dict[j]
//         }
        
//     }
// }
// e.push(max1)
// e.push(max2)
// e.push(max3)
// console.log(e)
var max1=0
var max2=0
var max3=0
var e=[]
for (i in my_dict){
    for ( j in my_dict){
        if (my_dict[i]>max1){
            max1=my_dict[i]
        }
        else if ( my_dict[j]>max2 && max2<my_dict[j]){
            max2=my_dict[j]
        }
    }
}
e.push(max1)
console.log(e)