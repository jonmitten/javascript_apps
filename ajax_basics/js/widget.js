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

/* meeting rooms */
let meetingRoomsXhr = new XMLHttpRequest();
meetingRoomsXhr.onreadystatechange = function () {
  if (meetingRoomsXhr.readyState === 4) {
    let rooms = JSON.parse(meetingRoomsXhr.responseText);
    let statusHTML = '<ul class="rooms">';
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i].available == true) {
            statusHTML += '<li class="empty">' + rooms[i].room;;

        } else {
            statusHTML += '<li class="full">' + rooms[i].room;
        }
        statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
   }
};
meetingRoomsXhr.open('GET', 'data/meeting_room.json');
meetingRoomsXhr.send();
