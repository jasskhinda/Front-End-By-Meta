/* normal function or functional programming*/
function student (name, grade) {
finalgrade = grade +5;
console.log (name + " you have got " + finalgrade + "% out of 100% ");
return;
}

let name ="Jass";
let grade =70;
student(name, grade);
console.log (grade); 
/* in above code when we call the funciton
with actual values the original value stays same
and a copy is sent to the function to do the job or calculation or whatever
the function is doing
so the original value is not changed, everytime we print the original 
variable it will print the same value not the upodated one bcz its never
got updated it sjust the copy of it is being updated or used in the program
*/




/* object with funciton or object oriented programming*/
/* in this code the original value is changed and no value is copied
so evrytime we want to print out the object after each call, the updated values 
will be printed
so the original value is being modified everytime we clal the function*/

function student (studentgrade)
{
studentgrade.grade = studentgrade.grade + 5;
studentgrade.name = "Jass Khinda";
console.log (studentgrade.name + " you have got " + studentgrade.grade + "% out of 100% ");
return;
}

let studentgrade = {
    name: "Jass",
    grade:70,
}
student(studentgrade);
student(studentgrade);
console.log(studentgrade.name, studentgrade.grade);