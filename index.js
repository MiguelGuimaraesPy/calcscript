const display = document.getElementById("display");

function colocarNoDisplay(input){
    display.value += input;
}

function limpar(){
    display.value = ``
}

function calcular(){
    try{
        const resultado = eval(display.value);
        
        if(resultado === Infinity || resultado === -Infinity){
            display.value = `Erro`;
        }
        else{
            display.value = resultado;
        }

    }
    catch(error){
        display.value = `Erro`;
    };
    
}