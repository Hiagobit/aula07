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
    log
}