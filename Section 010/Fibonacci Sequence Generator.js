function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    if (n === 0) {
        return [];
    }
    else if (n === 1) {
        return [0];
    }
    else if (n == 2) {
        return [0, 1];
    }
    else {
        var outputArray = [0, 1];
        while (outputArray.length < n) {
            outputArray.push(outputArray[outputArray.length - 2] + outputArray[outputArray.length - 1]);
        }
    }

    return outputArray;
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

console.log(fibonacciGenerator(15));
