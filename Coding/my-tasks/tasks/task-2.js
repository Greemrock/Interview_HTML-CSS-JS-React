const obj1 = { name: "Intrinsic" };
const obj2 = { name: "Intrinsic" };

console.log(obj1 === obj2); // ???
console.log(obj1.name === obj2.name); // ???


/////////////////


function primitiveMutator(val) {
  val = val + 1;
}

let x = 1;

primitiveMutator(x);
console.log(x); // ???


function objectMutator(val) {
  val.prop = val.prop + 1;
}

let obj = { prop: 1 };

objectMutator(obj);
console.log(obj.prop); // ???