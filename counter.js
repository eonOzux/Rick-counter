/* (Time stamp) */

var currentDate = new Date();

var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

var timeString = hours + ':' + minutes + ':' + seconds;

document.getElementById("PID").addEventListener("PID",
    function () {
        var startTime = currentDate;
        document.getElementById("startTime").value = startTime.toISOString().slice(0, -1);
    });



console.log('Hora actual:' + timeString);


let count = 0;

const button = document.getElementById("stopButton");
const display = document.getElementById("display");

var endTime = new Date();

var hours_final = currentDate.getHours();
var minutes_final = currentDate.getMinutes();
var seconds_final = currentDate.getSeconds();

var timeString_final = hours_final + ':' + minutes_final + ':' + seconds_final;

button.addEventListener('click', () => {
    count += 1;
    display.textContent = count;
});

/* Codigo para botones */
$("button").click(function () {

    $(this).removeClass();
    $(this).addClass("btn btn-warning")
});

$("button").dblclick(function () {
    $(this).removeClass();
    $(this).addClass("btn btn-primary")
});
/* Fin Codigo para botones */


// Codigo para evitar que se cierre la pagina //
window.addEventListener('beforeunload', function (e) {
    var confirmationMessage = 'Estas seguro de que quieres cerrar Rick?';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
});