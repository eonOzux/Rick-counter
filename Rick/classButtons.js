/* Descomentar este script para funcionalidad de botones MCI */

/* FUNCIONALIDAD DE CLASES */
$("button").click(function () {

    $(this).removeClass();
    $(this).addClass("btn btn-warning")
}); 

$("button").dblclick(function () {
    $(this).removeClass();
    $(this).addClass("btn btn-primary")
});



let count = 0;

const button = document.getElementById("stopButton");
const display = document.getElementById("display");


button.addEventListener('click', () => {
    count += 1;
    display.textContent = count;
});

// Codigo para evitar que se cierre la pagina //
window.addEventListener('beforeunload', function (e) {
    var confirmationMessage = 'Estas seguro de que quieres cerrar Rick?';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
});