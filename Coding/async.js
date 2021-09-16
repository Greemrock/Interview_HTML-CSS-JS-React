// const first = () => console.log('first')
// const second = () => console.log('second')
// const third = () => console.log('third')

// first()
// setTimeout(() => {
//     second()
// }, 0);
// third()

// // first, third, second 
// // интерпретатор берет first и выполняет, берет тамаут, кладёт на очередь, берет third и выполняет. А в конце выполняется ждущий тамаут который закончился моментально, но все таки ожидал выполнения всех синхронных