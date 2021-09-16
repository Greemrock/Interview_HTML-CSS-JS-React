Object.create = function(proto, properties) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
        throw new TypeError('Only objects')
    }
    if (proto == 'undefined') {
        throw new RangeError('Must have proto')
    }

    function F() {

    }
    F.prototype = proto

    

    const newF = new F()
    if(typeof properties === 'object'){
        for (prop in properties) {
            if (properties.hasOwnProperty(prop)){
                newF[prop] = properties[prop];
            }
        }
    };
    return newF
}


const obj = {
    name: "Shaxx",
    age: 19,
    who: 'student',
    lang: 'JS',
}

const newObj = Object.create(obj, {
    house: "Tashkent",
})
newObj['house'] = "house"
newObj.home = 'Urgench'
