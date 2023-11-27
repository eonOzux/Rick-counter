        /* Prueba seleccionador de botones clickeados */
    
        
        var valores_ort = document.getElementsByClassName('btn-warning');
        for(var i=0; i<valores_ort.length; i++){
            console.log(valores_ort[i].value);
        };
    
        /* FIN Prueba seleccionador de botones clickeados */
    
        const input = document.getElementById('PID');
        //no es necesario crear la constante para boton ya esta declarada//
        const list = document.getElementById('list');
        var valor = document.getElementById('btn');
    
        boton_valor = valor.value 
        
        button.addEventListener('click', () => {
                            const item = input.value + " " + boton_valor + " " + "Tiempo:" + " " + timeString;
                            input.value = '';
                            const li = document.createElement('li');
                            li.textContent = item;
                            list.appendChild(li);
                            list.insertBefore(li, list.firstChild);
                        });