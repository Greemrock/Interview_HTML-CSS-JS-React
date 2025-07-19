// IMMEDIATE INVOKED FUNCTION EXPRESSION
// такие функции вызывают моментально и обычно находятся внутри круглых скобок ()

let result = [];
for (var i = 0; i < 5; i++) {
  result.push(function () {
    console.log(i);
  });
}

result[2](); // 5
result[4](); // 5

// for (var i = 0; i < 5; i++) {
//   (function (i_local) {
//     // мы тут при каждом подходе берём новый i и сохраняем его в i_local и тут используем в push
//     result.push(function () {
//       console.log(i_local);
//     });
//   })(i);
// }

// result[1](); // 1
// result[4](); // 4

//link =>    https://habr.com/ru/company/ruvds/blog/340194/

