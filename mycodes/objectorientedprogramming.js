
function sleep (isitsleeping) { /* i created a funcition
    with an empty perameter */
    var yesheissleeping = isitsleeping.length > 1; /* created a 
    variable that checks the leanth of the actual value when we call it
    if the value is bigger than 1 then its TRUE and saved into
    yesheissleeping and if its 1 or less than 1 it is false and its
    still saved in the yesheissleeping variable*/
    if (!yesheissleeping) { /* this checks if the value is not true
        or if the leanth of the actual passed value is less than or
        equal to 1 then code inside it runs*/
        console.log(yesheissleeping + " No He is sleeping");
    }
    
    else { /* if the value is true or the leanth of the actual passed
        value is greater than 1 then this code runs*/
        console.log(yesheissleeping);
    }
    return yesheissleeping;
    
}


var virtualPet = {
    sleepy: true,
    nap: sleep("hd"), /* i called the function and passed a value as 
    its 2 in leanth it should be true 
    and the code inside else should run */
}

console.log (virtualPet.nap);