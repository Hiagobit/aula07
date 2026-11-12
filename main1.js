//FUNÇÃO 01
 
function mediaAluno(nome,nota1,nota2,nota3) {
    let media = (nota1 + nota2 + nota3) /3
 
    if(media >= 7){
        console.log(nome+ " esta aprovado com a media: " + media);
       
    }
    else{
        console.log(nome+ "esta reprovado com a media "+ media);
       
    }
}

// FUNCAO 02
 
function diferencaNumero(numero1, numero2){
    if (numero1 >= numero2){
        let res = numero1 - numero2
        console.log("A diferença dos numeros é: " + res);
    }else{
        console.log("Numero1 tem que ser indentificado");
    }

}

// FUNCAO 03

//  Crie uma função que receba um número e exiba sua tabuada de 
// multiplicação, utilizando um laço de repetição, do 1 ao 10. 

function tabuada(numero1){
    for ( i = 1; i <= 10; i++ ){
        resultado = i * numero1
        console.log(numero1 + "X" + i  + "=" + resultado);

    }
}

// FUNCAO 04

// 4. Crie uma função que receba a idade de uma pessoa e classifique sua faixa 
// etária de acordo com as seguintes regras: menor que 12 anos: criança; de 
// 12 até 17 anos: adolescente; de 18 até 59 anos: adulto; 60 anos ou mais: 
// idoso. Ao final, exiba a classificação correspondente.

function classificaçãoEtaria (idade){
    if ( idade <= 12){
        console.log("você é criança");
        
    }else if ( idade >= 12 && idade <= 17){
        console.log("Adolecente");
        
    }else if ( idade >= 18 && idade <= 59){
        console.log("Adulto");
        
    }else{
        console.log("Velho");
        
    }
}

// FUNCAO 05

// 5. Crie uma função que receba a largura e a altura de um retângulo, calcule sua 
// área e exiba o resultado. (Para calcular a área de um retângulo, utilize a 
// fórmula Área = base × altura), O resultado deve ser expresso em unidades de 
// área, como centímetros quadrados (cm²)

function areaRetangulo(largura, altura) {
    let resultado = largura * altura
    console.log("a area do seu retangulo é "+ resultado +"cm²");
 
    
}

// FUNCAO 06

// Crie uma função que receba um número e realize uma contagem regressiva 
// até chegar a zero, utilizando um laço de repetição

function contagemRegressiva (numero){
    for ( let i = numero; i >= 0; i = i-1 ){
        console.log(i);
        
    }
}

// FUNCAO 07

// Crie uma função que receba o salário de um funcionário e aplique um 
// aumento de acordo com as seguintes regras: salários menores que R$ 1.000 
// recebem 20% de aumento, entre R$ 1.000 e R$ 2.000 recebem 15% e acima 
// de R$ 2.000 recebem 10%. Ao final, exiba o novo salário.

function aumentoSalario(salario) {
    if ( salario <= 1000 ){
        let resultado = salario * 0.20
        console.log("Seu salario recebeu um aumento de:" + resultado);
    }else if ( salario >= 1000 && salario <= 2000) {
        let resultado = salario * 0.15
        console.log("Seu salario recebeu um aumento de:" + resultado);
    }else if ( salario > 2000){
        let resultado = salario * 0.10
        console.log("Seu salario recebeu um aumento de:" + resultado);
    }else{
        console.log("informe seu salario correto");
        
    }

    
    
}

// FUNCAO 08

// 8. Crie uma função que receba um número e verifique se ele é par ou ímpar. Ao 
// final, exiba uma mensagem informando o resultado.

function imparPar(numero) {
    if ( numero % 2 == 0){
        console.log("Seu numero é par:" + numero);
        
    } else{
        console.log("Seu numero é impar:" + numero);
        
    }
    
}

// FUNCAO 09 

// 9. Crie uma função que receba uma temperatura em Celsius e converta para 
// Fahrenheit. A função também deverá receber uma informação opcional para 
// definir se deseja realizar a conversão inversa, de Fahrenheit para Celsius. 
// Caso essa informação não seja fornecida, deverá realizar a conversão 
// padrão de Celsius para Fahrenheit. 

function fahCels(temperatura,numero) {

    if ( temperatura == "Fah"){
        let resultado = ( numero * 1.8) + 32
        console.log(resultado);
        
    } else if ( temperatura == "Cel"){
        let resultado = ( numero - 32) / 1.8
        console.log((resultado));
        
    }else{
        console.log("Escolha uma das opção");
        
    }
    
}



// FUNCAO 10

// Crie uma função que receba três números representando os lados de 
// um triângulo e verifique se ele é equilátero, isósceles ou escaleno. 

function triangulo(numero1, numero2, numero3){
    if (numero1 == numero2 && numero2 == numero3 && numero1 == numero3){
        console.log("seu triangulo é equilatero");
        
    }else if (numero1 != numero2 && numero2 != numero3 && numero1 && numero3){
        console.log("Seu triangulo é escaleno");
        
    }else{
        console.log("Seu triangulo é isóscele ");
        
    }
}

