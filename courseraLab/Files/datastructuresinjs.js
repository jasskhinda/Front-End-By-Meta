const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index, array) {
    console.log(`${index}. ${fruit}. now this is array ' ${array}' end`)
}
fruits.forEach(appendIndex);