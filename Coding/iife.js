    // IMMEDIATE INVOKED FUNCTION EXPRESSION
// такие функции вызывают моментально и обычно находятся внутри круглых скобок ()

let result = []
for (var i = 0; i < 5; i++) {
    result.push(function() {
        console.log(i)
    })
}

result[2]() // 5
result[4]() // 5

// for (var i = 0; i < 5; i++) {
//     (function() {
//         var j = i // мы тут при каждом подходе берём новый i и сохраняем его в j и тут используем в push
//         result.push(function(){console.log(j)})
//     })()
// }

// result[1]() // 1
// result[4]() // 4