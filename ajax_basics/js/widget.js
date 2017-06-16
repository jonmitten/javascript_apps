let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let employees = JSON.parse(xhr.responseText);
    console.log(employees);
    console.log(employees.length);
    let statusHTML = '<ul class="bulleted">';
    for (let i = 0; i < employees.length; i++) {
        console.log(employees[i]);
        if (employees[i].inoffice == true) {
            statusHTML += '<li class="in">' + employees[i].name;;

        } else {
            statusHTML += '<li class="out">' + employees[i].name;
        }
        statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
   }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

