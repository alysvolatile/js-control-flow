/* Write a program that will print the age category, given a variable with an age. 
Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", 
for an age that is an integer between 0 and 20.
 */

let age;

function printAge (age) {
    if (age > 18 && age <= 20) {
        console.log("young adult");
    } else if (age > 12) {
        console.log("teen");
    } else if (age > 9) {
        console.log("preteen");
    } else if (age > 4) {
        console.log("child");
    } else if (age > 1) {
        console.log("toddler");
    } else {
        console.log("infant");
    } 
}

printAge(12);