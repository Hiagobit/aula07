// Objetivo: retornar uma mensagem personalizado para o usuario
// dentro dos parentes () vai os parametros da função
function fnMensagem(nome){
    console.log("Seja bem vindo"+ nome +" , ao sistema");
    
}
// objetivo: receber 2 numeros e somar os valores 
// para passar + de 1 parametros eu separo
// E SE eu quiser passar +1 parametro que valide o "tipo de operação(+, -, *, /)"?
function fnSoma(numero1, numero2, operador){
    let res
    
    if (operador == "somar"){
        res = numero1 + numero2
    }
        
    if (operador == "subtrair"){
        res = numero1 - numero2
    }
    if (operador == "multiplicar"){
        res = numero1 * numero2
    }
    if (operador == "dividir"){
        res = numero1 / numero2
    }else{
        // caso nenhum valor seja valido
        console.log("Valor do operador invalido, calculo zerada");
        
    }

    console.log("A soma dos valores " + res);
    
}

