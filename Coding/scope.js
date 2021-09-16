function funcA() {
    let a = 1

    function funcB() {
        let b = 2

        function funcC() {
            let c = 3
            console.log("funcC: ", a), b, c
        }
        funcC();
        console.log('funcB: ', a, b); // тут переменная 'c' уже не доступна
    }
    funcB();
    console.log('funcA: ', a); // тут переменные 'b' и 'c' не доступны
}
funcA()
