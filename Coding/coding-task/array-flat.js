Array.prototype.flat = function(depth) {
    if (depth === undefined){
        depth = 1;
    }

    function flatten(arr, depth) {
        if (depth < 1) {
            return arr;
        }

        return arr.reduce((res, el) => {
            return res.concat(Array.isArray(el) ? flatten(el, depth - 1) : el)
        }, [])
    }
    return flatten(this, depth);
}
const arr = [1, 2, 3, [1, 2, [1]]] 
console.log(arr.flat(-1))

function flatten(arr) {
    let res = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            res = res.concat(flatten(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}