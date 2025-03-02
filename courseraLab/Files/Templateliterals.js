var h1 = document.querySelector("h1"); /* 
okay we have selected an element from the big DOM object and stored it
to a variable h1, so we selected h1 from the page and stored or assigned it
to a new variable h1 that we have created */
var  arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click'];/* then we 
just have a simple array that has 4 items in it */

function handleClicks() /* here we have created a function
*/
{ /* this function have switch statement, which is simple in other codes
    but here its a bit tricky */
switch (h1.innerText) /* so this statement checks the value of the h1 element or the variable
that we have created above, if the value of this h1 variable is
equal to the value of the first item which is 'Example Domain' in the array
the first case runs */
{
    case arr[0]:
        h1.innerText = arr[1]; /* so what does the first case
        do when it runs, it takes the inner text of the variable h1 or the element
        h1 and replace it with array item at position 1 which is 'First Click' */
        break;

    case arr[1]:
        h1.innerText = arr[2]; /* then after the first case run the value of h1 is 
        updated now to the item of array at position 1 and now it is equal to
         'First Click' so this seocnd case is now true as it checks if the valiue
         of h1 is equal to the value of the item at position 1 in the array and update 
         it to the item array value at position 2*/
        break;

    case arr[2]:
        h1.innerText = arr[3]; /* same here, h1 gets updated
        to the next values of array items */
        break;

    default:
        h1.innerText = arr[0];
        break; /* this is the default case, if none of the cases are true
        then this case runs and it updates the value of h1 to 
        the first item at position 0 which is 'Example Domain' */
}
}

h1.addEventListener( 'click', handleClicks);

/* then we have called the addEventListener method on the h1 element
this method takes two arguments, the first argument is the 
event that we want to listen to, and the second ardument what we want to hapopen
when that event occurs, so we want to check if the event 
click occurs then run our function handleClicks 
when this function runs it it sees as the default case value is example domain
nothing happens nothing is assigned to it but when the even occurs 
the first case runs then as long as the even occurs in loop like if the user is
cliking the all switch cases runs*/
