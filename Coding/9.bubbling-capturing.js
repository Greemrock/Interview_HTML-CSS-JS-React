const Parent = 'parent';
const child = 'child';

Parent.addEventListener('click', () => {
    console.log(Parent)
})

child.addEventListener('click', () => {
    console.log(child);
})

// EVENT BUBBLING
// if you click on child - child, parent (сначала выполняется ребёнок, а затем родитель)

// EVENT CAPTURING

// to enable this add True as the third parameter to listener
// Parent.addEventListener('click', () => {
//     console.log(Parent)
// }, true)
// if you click on child - parent, child (сначала родитель, потом ребёнок)