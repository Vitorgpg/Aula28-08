/*
Var palavravariavel-?
funcaoes{prompt(""): string
         parseint(""):number
         parsefloat("")number
         console.log(""):void}
___________________________________
+ soma ou concatena
- subtrai
* multiplica
/ divide
___________________________________

condicoes - retorna um boolean um true-false

if(_________________ ________ _________________)
   var ou texto-num           var ou texto-num

== igual//comparação
> maior
> maior igual
< menor 
< menor igual
!= diferente
*/

var anoAtual = 2024;
var anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
var idade = anoAtual - anoNascimento;

if (idade >= 18) {
    console.log("Você é maior de idade ?:")
    console.log("Você é obrigado a votar!")
}else{
    console.log("você é menor de idade no Brasil!");
}


// Manipuland o IF
console.log(" Usando apenas o > (idade > 17 )");
if ( idade > 17) { 
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

console.log("Invertendo o resultado da idade < 18 ");
if ( idade < 18) {
    console.log("Menor de idade");
} else {
    console.log("Maior de idade");
}


/*
Elabore um programa que:
1. Inicie o saldo da conta zerado.
2. solicite um valor  a ser depositado.
3. solicite um valor a ser sacado.
4. apresente se é possivel sacar ou não o valor.
*/

var valorSaldo = 0;
var valorDeposito = parseFloat(prompt("Digite valor a ser depositado"));
var valorsacado = parseFloat(prompt("Qual valor a ser sacado ? "));

var saldofinal = valorSaldo + valorDeposito;

if (valorsacado <= saldofinal) {
    console.log("Você tem: " + saldofinal + "." + "É possivel sacar!");
} else {
    console.log("Você tem: " + saldofinal + "." + "Não é possível sacar!");
    
}
