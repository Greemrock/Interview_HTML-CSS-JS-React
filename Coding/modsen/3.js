// Дaнa зaдaчa, чтo будeт вывeдeнo в кoнсoль:

const square = {
    side: 10,
    area() {
        return this.side * this.side;
    },
    perimeter: () => 2 * this.side
};
 
console.log(square.area()); // 100
console.log(square.perimeter()); //NaN
