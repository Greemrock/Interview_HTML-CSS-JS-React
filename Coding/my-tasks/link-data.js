function primitiveMutator(val) {
  val = val + 1;
}

let x = 1;

primitiveMutator(x);
console.log(x); // 1

// -----------------

function objectMutator(val) {
  val.prop = val.prop + 1;
}

let obj = { prop: 1 };

objectMutator(obj);
console.log(obj.prop); // 2

// -----------------

const obj1 = { name: "Intrinsic" };
const obj2 = { name: "Intrinsic" };
console.log(obj1 === obj2); // false
// При этом их свойства .name являются примитивными значениями:
console.log(obj1.name === obj2.name); // true