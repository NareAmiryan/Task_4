
function first_larg_num_index(arr){
    let max;
    let index;
    max=arr[0];
    for(let i = 1;i < arr.length ;i++ ){
     if(arr[i] > arr[i-1]){
         max = arr[i];
     }
    }
    for(let i = 0;i < arr.length ;i++ ){
       if(max == arr[i]){
         index = i;
       }
    }
       return index;
}

function first_larg_num(arr_1){
    let max;
    max = arr_1[0];
    for(let i = 1;i < arr_1.length ;i++ ){
     if(arr_1[i] > arr_1[i-1]){
         max = arr_1[i];
     }
    }
    return max;
}

    let my_array = [3,4,5,6,8,9,10,6,25];
    let ind = first_larg_num_index(my_array);
    my_array.splice(ind,1);
    let sec_larg_num = first_larg_num(my_array);
    alert("The second largest number is : " + sec_larg_num);