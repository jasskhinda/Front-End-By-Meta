

var dish = [
    /* we have an array with objects as its items */

    { dishname : "Italian pasta Price", dishprice : 9.55},
    { dishname : "Rice with veggies Price", dishprice : 8.65},
    { dishname : "Chicken with potatoes Price", dishprice : 15.55},
    { dishname : "Vegetarian Pizza Price", dishprice : 6.45},
];


function taxondishes(dish, statement){ /* our funciton takes two perameters
    one is the entire array and second is the statement*/
if (statement == true){ /* then we have a condition which checks
    if the value passed in the statement perameter is true or not
    if it is true then it will execute the code inside the */

    for (const dishes of dish) { /* we have a for loop whcih we use to 
        to loop over the objects as normal loop doesnt work on objects so we need to
        convert object into array first and then loop over it, so this our code 
        gets the entore dish array of object and convert it to the simple array
        now all the objects properties and values are array and saved to the variable
        dishes which is an array now*/
        const priceafterTax = dishes.dishprice * 1.2; /* this checks the price property in
        the dished array and then multiply it by 1.2 which is 20% tax and then save it to the 
        priceafterTax variable */
        console.log(`The ${dishes.dishname}  is $${priceafterTax}`); /* 
        then we simply print the name of the dish and the price after tax */
    }
}
else{

    for (const dishes of dish){ /* we have a for loop here as well
        which does the same thing as above but this time it will not add the tax
        and it only runs when the statement is false */
    console.log(`${dishes.dishname} is $${dishes.dishprice}`);


}

}
}

taxondishes(dish, !true);