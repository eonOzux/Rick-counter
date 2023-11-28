/* parte de Tiempo (Time stamp) */

var currentDate = new Date();

/* var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds(); */

var timeString = hours + ':' + minutes + ':' + seconds;  // Solo para separar las horas del Date.//

var finish_Date = new Date();

document.getElementById("PID").addEventListener("input",
    function () {
        var startTime = currentDate;
        document.getElementById("startTime").value = startTime;
    });

document.getElementById("stopButton").addEventListener("click", function () {
    var endTime = new Date();
    var timestamp = now.toISOString();d
    endTime.textContent = timestamp;

    // Get the element where you want to display the timestamp
var timestampElement = document.getElementById('timestamp');

// Add the click event listener to the element
timestampElement.addEventListener('click', function() {
    // Get the current date and time
    var now = new Date();

    // Format the date and time as a string
    var timestamp = now.toISOString();

    // Update the text content of the element with the new timestamp
    timestampElement.textContent = timestamp;
});
    /* Second Review */
    /* swal({
        title: "Hiciste la segunda revision?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Caso enviado" + "Tiempo transcurrido: " + elapsedTime, {
                    icon: "success",
                });
            } else {
                swal("Revisa otra vez!");
            }
        }); */
});

console.log('Hora actual:' + timeString);
console.log(elapsed);
