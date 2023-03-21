const LinkedList = require("./LinkedList.js");

// Method appent()

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");
list.append("d");
console.log(list);

// Methods insert()

list.insert("h", 0);
console.log(list);

// Methods get()

console.log(`Element by id: ${list.get(0)}`);

// Methods length()

console.log(`Length of this list is:  ${list.length()}`);

// Method delete()

list.delete(0);
console.log(`First character after delete: ${list.get(0)} insted 'h'`);

// Method deleteAll()

list.deleteAll("z");
console.log(list);

// Method clone()

const clonedList = list.clone();
console.log("Cloned List");
console.log(clonedList);

// Method reverse()

console.log("First variant list");
console.log(list);
console.log("Reversed list");
list.reverse();
console.log(list);

// Method findFirst()

clonedList.append("f");
clonedList.append("f");
clonedList.append("f");
console.log("first 'f' in clonedList:", clonedList.findFirst("f"));

// Method findLast()

console.log("first 'f' in clonedList:", clonedList.findLast("f"));

// Method extend()

clonedList.extend(list);
console.log(clonedList);

// Method clear()

clonedList.clear();
console.log(clonedList);
