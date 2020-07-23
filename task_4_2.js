function arr_rev(my_arr){
    let new_arr = new Array;
    for(let i = my_arr.length - 1; i >= 0; i--){
        new_arr.push(my_arr[i]);
    }
    return new_arr;
}

let arr = [5,6,7,14,8,18,5];
let new_array = arr_rev(arr);
alert("Our new array is : " + new_array);