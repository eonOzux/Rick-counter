const input = document.getElementById('PID');
//no es necesario crear la constante para boton ya esta declarada//
const list = document.getElementById('list');

button.addEventListener('click', () => {
    const item = input.value + " " + timeString_final;
    input.value = '';
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
});
    