const arr1 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr2 = [1, 'a', 3, 'e', 5, 7, 9, 'i'];
const arr3 = [1, 'a', 3, 5, 'e', 7, 10, 'i'];
const arr4 = [0, 2, 4, 6];

// We need to compare the arrays in their totality, so let's make them strings to test
let string1 = arr1.join();
let string2 = arr2.join();
let string3 = arr3.join();
let string4 = arr4.join();

function arrCompare (arr1,arr2) {
    let string1 = arr1.join();
    let string2 = arr2.join();
    if (string1 === string2) {
        console.log(`It's a match!`)
    } else {
        console.log(`Doesn't match!`)
    }
}

arrCompare (arr1,arr2);
arrCompare (arr2,arr3);
arrCompare (arr3,arr4);


// //determine longest array so it compares full index length
// let longestArrayLength;
// if (arr1.length >= arr4.length) {
//     longestArrayLength = arr1.length;
// } else {
//     longestArrayLength = arr4.length;
// }

// for (let i = 0; i < arr1.length; i++) {
//     // can replace this with a switch statement?
//     if (arr1[i] === arr4[i]) {
//         console.log('Matches!');
//     } else {
//         console.log('Doesn\'t match!');
//     }
// } 

