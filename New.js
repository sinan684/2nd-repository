/*let todolist = [];

let a =prompt("What did you do all day today??")
todolist.push(a)

let b =prompt("What did you do all day today??")
todolist.push(b)
let c =prompt("What did you do all day today??")
todolist.push(c)
let d =prompt("What did you do all day today??")
todolist.push(d)

console.log("Your-todo-list");
console.log(todolist);*/



let items = [];

function add(item) {
    if (!items.indexOf(item)) {
        items.push(item);
    }
}


function remove(item) {
    const index = items.indexOf(item);
    if (index !== -1) {
        items.splice(index, 1);
    }
}
function lastChar(index) {
    if (index.length === 0) return null; 
    return index[index.length - 1];
}
function reverse(index) {
    return index.split('').reverse().join('');
}
add('grapes');
add('mango');

console.log(items); 




console.log(lastChar('TESTING'));



console.log(reverse('REVERSE')); 
console.log(reverse(reverse('REVERSE')));

