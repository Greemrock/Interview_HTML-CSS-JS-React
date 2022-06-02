// Дана задача, чтo прoизoйдет при вызoве функции:

function * fn(num) {

  for (let i = 0; i < num; i += 1) {

    yield console.log(i);

  }
}

const loop = fn(5);

loop.next(); // 0

loop.next(); // 1
