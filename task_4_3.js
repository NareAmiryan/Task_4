function changing(string){
let my_array = new Array;
    my_array = string.split(' ');
    return my_array;
}

let string = "You have a huge string,implement a function that returns all words in array format";
alert(changing(string));