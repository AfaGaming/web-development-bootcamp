function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.
    var position = Math.random() * names.length;
    position = Math.floor(position);
    var result = names[position] + " is going to buy lunch today!";
    
    return result;

/******Don't change the code below*******/    
}

names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

console.log(whosPaying(names));