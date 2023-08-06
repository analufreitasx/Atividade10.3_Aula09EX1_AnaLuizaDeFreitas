function SomaeMédia (num1, num2, num3, num4){
    var soma = num1 + num2 + num3 + num4
    return alert("A soma dos números digitados é igual a " + soma + ". \nA média dos números digitados é igual a " + (soma/4) + ".")
}
var num1 = parseInt (prompt('Este site executa o cálculo da soma e média de 4 números. \nDigite um número:'))
var num2 = parseInt (prompt(' Digite outro número:'))
var num3 = parseInt (prompt(' Digite outro número:'))
var num4 = parseInt (prompt(' Digite outro número:'))
var result = SomaeMédia (num1, num2, num3, num4)