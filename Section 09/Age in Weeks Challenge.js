function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    yearsLeft = 90 - age
    
    numberOfDays = yearsLeft * 365
    numberOfWeeks = yearsLeft * 52
    numberOfMonths = yearsLeft * 12
    
    console.log("You have " + numberOfDays + " days, " + numberOfWeeks + " weeks, and " + numberOfMonths + " months left.")
    
/*************Don't change the code below**********/
}

lifeInWeeks(51);