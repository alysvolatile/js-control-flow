let thing = 'cat';
let count = 1;

function pluralizer(thing,count) {
    if (count < 1) {
        console.log(`There aren't any ${thing}s here!`)
    } else if (count > 1) {
        console.log(`${thing}s`);
    } else {
        console.log(`${thing}`)
    }
}

pluralizer(thing,count);