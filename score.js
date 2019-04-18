function solve(a, b) {
    var c = 0;
    var d = 0;
    for(var i = 0; i < 3; i++){
        if(a[i] > b[i]){
            c++
        }
        if(a[i] < b[i]) {
            d++
        }

    }
    var new_arr = [];
    new_arr.push(c);
    new_arr.push(d);
    return(new_arr);
}



console.log(solve([1,2,3], [0,2,4]));

