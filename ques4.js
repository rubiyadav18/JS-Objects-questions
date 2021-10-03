var d1={1:10, 2:20,5:50}

var d2={3:30,2:40,6:60}

var di3={5:50,6:60}
for (i in d2){
    if ( i in d1){
        d1[i]=d1[i]+d2[i]

    }
    else{
        d1[i]=d2[i]

    }
}
console.log(d1)

