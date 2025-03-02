function returnvalues(a,b)
{
var c = a+b;
console.log(c);
    return c;

}

var aa= 5;
var bb= 10;
returnvalues(aa,bb);
var returnvaluefromthefunction = returnvalues(aa,bb);

console.log(returnvaluefromthefunction);



/* i got how return value from fucntion works

so here is what happnes */
function returnvalues(a,b) /* we create a funciton with 
placeholders, this will
 take the actual values when we call the function, 
 so assume we call the function with value "ChatGPT" */ 

 {
    var c = a+b; /* then we add the values of a and b and store
     it in c */
    console.log(c);/* then the value is passed to this section 
    and printed out */
        return c; /* then at the end of the code inside 
        function after the final result, whatever the final result value is, 
        we send or store this value with keyword return, this keyword return 
        stores the value and sends it backto the place where the 
        function was called or sends 
        it outside of the function template */
    
    }
     

    var aa= 5; /* now we decleare the placeholders values
    with actual values that we can use when we call the funciton  */
    var bb= 10;

    returnvalues(aa,bb); /* now we call the function and pass the actual values */

    var returnvaluefromthefunction = returnvalues(aa,bb); /* now the value is 
    returned back to the and we created a variable to store the value  so the varieble
     returnvaluefromthefunction holdes the returned value from the funciton */
    
    console.log(returnvaluefromthefunction); /* now we print the returned values that
    we saved in the varieble */
    

