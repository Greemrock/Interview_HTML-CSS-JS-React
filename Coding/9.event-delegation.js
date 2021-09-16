// EVENT DELEGATION
// это когда мы динамично вешаем листенеры на элементы, не вешаем прямо на сами элементы, а на парент

// const list = document.querySelector('.list')

// list.addEventListener('click', (event) => {
//     const target = event.target // куда мы нажимаем, на что нажимаем
//     if (target.matches('li')) { // проверяем является ли таргет тем, что на нужно
//         console.log('да, это li')
//     }
// })

// const newLi = document.createElement('li')
// list.appendChild(newLi) // Добавляем в список новый элемент, уже после вешания листенера. Но на новом элементе листенера также будет действовать, так как мы не вешаем на каждый элемент отдельно.