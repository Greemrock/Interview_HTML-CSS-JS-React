// "Дaнa зaдaчa, что будeт вывeдeно в консоль:

var employeeId = 1;

(function() {
  console.log(employeeId); // undefined

  if (employeeId) {
    var employeeId = 2;
  }
  
  console.log(employeeId) // undefined
  var employeeId = 2;
  console.log(employeeId) // 2
})();
