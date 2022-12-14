/* Write a program that will print the age category, given a variable with an age. 
Display either "infant", "toddler", "child", "preteen", "teen", or "young adult", 
for an age that is an integer between 0 and 20.
 */

const age = 12;
switch (true) {
    case (age > 18 && age <= 20):
        console.log("young adult");
        break;
    case (age > 12):
        console.log("teen");
    case (age > 9):
        console.log("preteen");
        break;
    case (age > 4):
        console.log("child");
        break;
    case (age > 1):
        console.log("toddler");
        break;
    default:
        console.log("infant");
}
